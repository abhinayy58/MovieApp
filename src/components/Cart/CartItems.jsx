import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const CartItems = ({ item }) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.item);

  const RemoveToCartHandler = (id) => {
    cartCtx.removeItem({
      id,
    });
  };
  return (
    <div className="mt-2 p-4 flex gap-4 items-center border rounded-[10px] text-center sm:ml-4 sm:text-left">
      <img src={item.Poster} className="w-12 " />
      <div>
        <p className="mt-2 text-[14px] font-bold leading-relaxed text-black">
          {item.Title}
        </p>
        <p className="mt-2 text-[12px] leading-relaxed text-gray-500">
          {item.Plot}
        </p>
      </div>
      <p
        className="text-red-700 cursor-pointer"
        onClick={() => RemoveToCartHandler(item.Title)}
      >
        Remove
      </p>
    </div>
  );
};

export default CartItems;
