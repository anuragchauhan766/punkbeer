import { para } from "../helper/discription";
import { Beer } from "../helper/getBeers";

function Card(props: Beer) {
  return (
    <div className="flex  gap-1 rounded-xl shadow-2xl bg-neutral-200 p-3">
      <div className="w-3/4">
        <div className="flex flex-col">
          <span className="text-4xl font-bold">{props.name}</span>
          <span className="text-lg font-medium text-gray-600 ">
            {props.tagline}
          </span>
        </div>

        <div className="grid grid-cols-5 gap-1 text-base font-medium text-black mt-2">
          <div>
            <span className="text-gray-600">first-brewed:</span>
          </div>
          <div className="col-span-4">
            <span> {props.first_brewed}</span>
          </div>
          <div>
            <span className="text-gray-600">abv: </span>
          </div>
          <div className="col-span-4">
            <span> {props.abv}</span>
          </div>
          <div>
            <span className="text-gray-600">Discription: </span>
          </div>
          <div className="col-span-4">
            <p className="whitespace-pre-wrap">
              {para(props.description, 280)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <img src={props.image_url} alt="beer-image" className="w-20" />
      </div>
    </div>
  );
}

export default Card;
