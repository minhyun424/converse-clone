import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar() {
  return (
    <button className="translation-all flex h-16 w-16 items-center justify-center bg-black text-white duration-300 lg:w-60 lg:justify-between lg:px-4">
      <span className="hidden font-light lg:block">검색</span>
      <SearchIcon className=" w-5" />
    </button>
  );
}
