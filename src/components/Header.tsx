import { HeartIcon, MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline";
import Logo from "./Logo";

export default function Header(){
    return(
      <>
      <header className="relative flex justify-between border-b p-3 md:hidden">
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
      </header>
      <header className="hidden justify-between md:flex p-3 items-center">
        <div className="flex">
         <Logo />
         <nav className="flex ml-4">
           <ul className="flex items-center hover:text-gray-500">
             <li className="p-3 font-semibold hover:text-gray-800">
              <a href="#" className="flex h-full items-center px-3"> 
              신발
              </a>
               </li>
             <li className="p-3 font-semibold hover:text-gray-800">
              <a href="#" className="flex h-full items-center px-3"> 
              의류
              </a>
               </li>
             <li className="p-3 font-semibold hover:text-gray-800">
              <a href="#" className="flex h-full items-center px-3"> 
              아동
              </a>
               </li>
             <li className="p-3 font-semibold hover:text-gray-800">
              <a href="#" className="flex h-full items-center px-3"> 
              런칭캘린더
              </a>
               </li>
             <li className="p-3 font-semibold hover:text-gray-800">
              <a href="#" className="flex h-full items-center px-3"> 
              SALE
              </a>
               </li>
           </ul>
         </nav>
        </div>
        <div>
          <nav className="flex">
            <ul className="flex items-center space-x-4">
              <li>
                <button>
                <UserIcon className="w-6" />
              </button>
              </li>
              <li>
                <button className="relative">
            <ShoppingCartIcon className="w-6" />
            <div className="absolute top-0 right-0 flex h-4 w-4 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-green-400">
              <span className="text-[0.7rem] text-white">0</span>
            </div>
          </button>
              </li>
              <li>
                <button>
                <HeartIcon className="w-6" />
              </button>
              </li>
              <li>
                <button>
                <QuestionMarkCircleIcon className="w-6" />
              </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        </>
    );
}