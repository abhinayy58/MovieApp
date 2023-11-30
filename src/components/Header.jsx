import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";
import CartModal from "./Cart/CartModal";

const Header = () => {
  const catContext = useContext(CartContext)
 const [showCart,setShowCart] = useState(false)
  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="">
            <Link to='/' className="">
              <p className="text-white text-3xl">Movie App</p>
            </Link>
          </div>
          <div className="flex-3">
            <div className="relative ml-1">
              <div onClick={() => setShowCart(!showCart)}>
                <button
                  type="button"
                  className="relative flex rounded-full bg-black-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img
                    className="h-8 w-8"
                    src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/red-simple-shopping-cart-icon-12.png"
                    alt=""
                  />
                </button>
                <p className="absolute text-white text-l top-[-10px] right-[10px]">{catContext.item.length}</p>
              </div>
            </div>
            {showCart && <CartModal setShowCart={setShowCart} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
