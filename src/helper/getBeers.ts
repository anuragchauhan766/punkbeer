import axios from "axios";
export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
}
export const getbeers = async (searchTerm: string) => {
  try {
    const res = await axios.get<Beer[]>(
      `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getRandomBeers = async () => {
  try {
    const res = await axios.get<Beer[]>(
      "https://api.punkapi.com/v2/beers/random"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
