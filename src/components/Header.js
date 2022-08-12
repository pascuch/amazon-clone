import Logo from "../assets/amazonPNG11.png";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { selectedItems } from "../redux/basketSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const basket = useSelector(selectedItems);

  return (
    <header className="fixed top-0 w-full z-50">
      <section className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow md:flex-grow-0 ">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer object-contain w-20 h-10 mx-4"
            src={Logo}
            alt="logo"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-400">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>'Sign In'</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div onClick={() => navigate('/checkout')} className="link relative flex items-center">
            <p className="absolute flex items-center justify-center top-[-4px] right-[-5px] md:right-10 mb-2 h-5 w-5 bg-yellow-500 text-center rounded-full text-black font-bold">
              {basket.length}
            </p>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-2" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">{`Today's Deal`}</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </section>
    </header>
  );
}

export default Header;
