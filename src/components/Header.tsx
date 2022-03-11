import {
  HeartIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 border-b bg-white">
      <div className="relative flex justify-between border-b p-3 md:hidden">
        <Logo className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <button>
          <MenuIcon className="w-6" />
        </button>
        <div className="flex space-x-3">
          <button className="relative">
            <ShoppingCartIcon className="w-6" />
            <div className="absolute top-0 right-0 flex h-4 w-4 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-green-400">
              <span className="text-[0.7rem] text-white">0</span>
            </div>
          </button>
          <button>
            <SearchIcon className="w-6" />
          </button>
        </div>
      </div>
      <div className="hidden items-center justify-between p-3 md:flex">
        <div className="flex">
          <Logo />
          <nav className="ml-4 flex">
            <ul className="group flex items-center">
              <li className="p-3 font-semibold transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#" className="flex h-full items-center px-3">
                  신발
                </a>
              </li>
              <li className="p-3 font-semibold transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#" className="flex h-full items-center px-3">
                  의류
                </a>
              </li>
              <li className="p-3 font-semibold transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#" className="flex h-full items-center px-3">
                  아동
                </a>
              </li>
              <li className="p-3 font-semibold transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#" className="flex h-full items-center px-3">
                  런칭캘린더
                </a>
              </li>
              <li className="p-3 font-semibold text-red-500 transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#" className="flex h-full items-center px-3">
                  SALE
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="absolute right-0 flex">
          <nav className="flex space-x-2">
            <ul className="group flex items-center space-x-4">
              <li className="transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#">
                  <UserIcon className="w-6 " />
                </a>
              </li>
              <li className="transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#" className="relative ">
                  <ShoppingCartIcon className="w-6 " />
                  <div className="absolute top-0 right-0 flex h-4 w-4 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-green-400">
                    <span className="text-[0.7rem] text-white">0</span>
                  </div>
                </a>
              </li>
              <li className="transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#">
                  <HeartIcon className="w-6 " />
                </a>
              </li>
              <li className="transition-opacity hover:!opacity-100 group-hover:opacity-50">
                <a href="#">
                  <QuestionMarkCircleIcon className="w-6 " />
                </a>
              </li>
            </ul>
            <SearchBar />
          </nav>
        </div>
      </div>
    </header>
  );
}
