import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.fetchProductsSuccessType:
      return {
        ...state,
        type: action.type,
        products: action.payload,
      };
    case types.fetchCartSuccessType:
      return {
        ...state,
        type: action.type,
        cart: action.payload,
      };
    case types.saveProductToCartSuccessType:
      return {
        ...state,
        type: action.type,
        cart: [...state.cart, action.payload],
      };

    case types.addNotificationToQueueType:
      return {
        ...state,
        type: action.type,
        notificationsQueue: [...state.notificationsQueue, action.payload],
      };

    case types.removeNotificationToQueueType:
      console.log("passou no remove");
      return {
        ...state,
        type: action.type,
        notificationsQueue: state.notificationsQueue.slice(1),
      };

    default:
      return { ...state, type: action.type }; //os casos q só alteram o type passam por aqui
  }
};
