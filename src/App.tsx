import { FormEvent, useState } from "react";
import { GoSearch } from "react-icons/go";
import Card from "./component/Card";
import { Beer, getRandomBeers, getbeers } from "./helper/getBeers";

function App() {
  const [input, setInput] = useState("");
  const [beers, setBeers] = useState<Beer[] | undefined>(undefined);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await getbeers(input);
    setBeers(res);
  };
  return (
    <div className="w-full h-full  p-5">
      <div className="flex flex-col gap-10">
        <div className="w-full  flex items-center justify-center gap-2">
          <div className="relative w-1/4">
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 items-center justify-center"
            >
              <input
                type="text"
                name="search"
                value={input}
                autoComplete="off"
                onChange={(e) => setInput(e.target.value)}
                className="text-gray-600 p-2 text-lg font-medium rounded-xl outline-none border-1 shadow-2xl pl-10 w-full"
              />

              <button
                type="submit"
                className="p-2 bg-gray-600 text-white rounded-xl px-3 shadow-2xl"
              >
                Search
              </button>
            </form>
            <span className="absolute top-2 left-2">
              <GoSearch className="w-6 h-6 fill-gray-600" />
            </span>
          </div>
          <div>
            <span>or</span>
          </div>
          <div>
            <button
              type="button"
              className="p-2 bg-gray-600 text-white rounded-xl px-3 shadow-2xl"
              onClick={async () => {
                const res = await getRandomBeers();
                setBeers(res);
              }}
            >
              Get Random
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-5 mb-5">
          {beers?.map((beer) => (
            <Card {...beer} key={beer.id} />
          ))}
        </div>
        {beers === undefined ? (
          <div className=" font-bold text-gray-500 italic flex flex-col mx-auto">
            <span className="text-4xl"> No beers :)</span>
            <span className="text-2xl">Try Searching More e.g. punk</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
