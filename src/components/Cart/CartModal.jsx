import React, { useContext } from "react";
import CartItems from "./CartItems";
import CartContext from "../../store/CartContext";

const CartModal = ({ setShowCart }) => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setShowCart(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="max-h-[450px] overflow-y-scroll example">
              {cartCtx.item.map((item) => (
                <CartItems key={item.Title} item={item} />
              ))}
              {!cartCtx.item.length && (<p className="py-5 text-gray-700 text-xl text-center mx-auto font-bold">Cart is empty Please Add to watch.</p>)}
            </div>
            <div className="items-center gap-2 mt-3 sm:flex">
              <button
                className="w-full mt-2 p-2.5 bg-red-500 text-white rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={() => setShowCart(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
