import { useReducer } from "react";

import CartContext from "./CartContext";

const cartReducer = (
  state = {
    item: [],
  },
  action
) => {
  console.log(state,action.id)
  if (action.type === "ADD") {
    return {
      ...state,
      item: [...state.item, action.item.video],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      item: state.item.filter(items => items.Title !== action.id.id),
    };

  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, { item: [] });

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.item,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
