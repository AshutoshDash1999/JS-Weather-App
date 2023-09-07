import { IconSearch } from "@tabler/icons-react";

const Searchbox = () => {
  return (
    <div>
      <div className="flex items-center bg-white rounded-full pl-2 pr-1 py-1 shadow focus:outline outline-offset-4 outline-2 outline-blue-300">
        <IconSearch className="text-blue-200" />
        <input
          type="text"
          className="font-semibold text-xl rounded-full focus:outline-none pl-3 caret-blue-400 text-blue-600"
        />
        <button className="bg-blue-400 text-white p-2 rounded-full shadow active:scale-90 transition ease-in-out duration-300">Search</button>
      </div>
    </div>
  );
};
export default Searchbox;
