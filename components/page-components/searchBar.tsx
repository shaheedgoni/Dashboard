import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  return (
    <div className="py-2 px-3 rounded-full border-gray-300 bg-gray-50 border-2 flex items-center gap-2">
      <LuSearch color="#99a1af" />
      <input
        type="search"
        className="placeholder:text-gray-400 placeholder:text-sm outline-none"
        placeholder="Search"
      />
    </div>
  );
}
