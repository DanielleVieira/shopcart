import * as productsService from "../services/productService";
import * as types from "./types";

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export const fetchProductsInitAction = () => ({
  type: types.fetchProductsInitType,
});

export const fetchProductsSuccessAction = (products) => ({
  type: types.fetchProductsSuccessType,
  payload: products,
});

export const fetchProductsFailAction = () => ({
  type: types.fetchProductsFailType,
});

export const fetchProductsAction = async (dispatch) => {
  dispatch(fetchProductsInitAction());
  try {
    await sleep(1000);
    const products = await productsService.getProducts();
    dispatch(fetchProductsSuccessAction(products));
  } catch (error) {
    dispatch(fetchProductsFailAction());
  }
};

export const fetchCartInitAction = () => ({
  type: types.fetchCartInitType,
});

export const fetchCartSuccessAction = (cart) => ({
  type: types.fetchCartSuccessType,
  payload: cart,
});

export const fetchCartFailAction = () => ({
  type: types.fetchCartFailType,
});

export const fetchCartAction = async (dispatch) => {
  dispatch(fetchCartInitAction());
  try {
    await sleep(1000);
    const cart = await productsService.getCart();
    dispatch(fetchCartSuccessAction(cart));
  } catch (error) {
    dispatch(fetchCartFailAction());
  }
};

export const addNotificationToQueueAction = (notification) => ({
  type: types.addNotificationToQueueType,
  payload: notification,
});

export const removeNotificationToQueueAction = () => ({
  type: types.removeNotificationToQueueType,
});

export const saveProductToCartInitAction = () => ({
  type: types.saveProductToCartInitType,
});
export const saveProductToCartSuccessAction = (product) => ({
  type: types.saveProductToCartSuccessType,
  payload: product,
});
export const saveProductToCartFailAction = () => ({
  type: types.saveProductToCartFailType,
});

export const saveProductToCartAction = async (dispatch, newProduct) => {
  dispatch(saveProductToCartInitAction());
  try {
    await sleep(1000);
    const product = await productsService.addProductToCart(newProduct);
    dispatch(saveProductToCartSuccessAction(product));
    dispatch(
      addNotificationToQueueAction({
        variant: "success",
        message: `${product.name} adicionado ao carrinho`,
      })
    );
  } catch (error) {
    dispatch(saveProductToCartFailAction());
    dispatch(
      addNotificationToQueueAction({
        variant: "danger",
        message: `Ocorreu um erro ao salvar o produto no carrinho!`,
      })
    );
  }
};

export const changeProductInCartAmountInitAction = () => ({
  type: types.changeProductInCartAmountInitType,
});

export const changeProductInCartAmountSuccessAction = (cart) => ({
  type: types.changeProductInCartAmountSuccessType,
  payload: cart,
});

export const changeProductInCartAmountFailAction = () => ({
  type: types.changeProductInCartAmountFailType,
});

export const changeProductInCartAmountAction = async (
  dispatch,
  productId,
  newAmount
) => {
  dispatch(changeProductInCartAmountInitAction());
  try {
    await sleep(1000);
    await productsService.changeProducAmount(productId, newAmount);
    const cart = await productsService.getCart();
    dispatch(changeProductInCartAmountSuccessAction(cart));
  } catch (error) {
    dispatch(changeProductInCartAmountFailAction());
  }
};

export const removeItemInCartInitAction = () => ({
  type: types.removeItemInCartInitType,
});

export const removeItemInCartSuccessAction = (cart) => ({
  type: types.removeItemInCartSuccessType,
  payload: cart,
});

export const removeItemInCartFailAction = () => ({
  type: types.removeItemInCartFailType,
});

export const removeItemInCartAction = async (dispatch, itemId) => {
  dispatch(removeItemInCartInitAction());
  try {
    await sleep(1000);
    const product = await productsService.removeProductToCart(itemId);
    const cart = await productsService.getCart();
    dispatch(removeItemInCartSuccessAction(cart));
    dispatch(
      addNotificationToQueueAction({
        variant: "success",
        message: `${product.name} removido do carrinho com sucesso`,
      })
    );
  } catch (error) {
    dispatch(removeItemInCartFailAction());
    dispatch(
      addNotificationToQueueAction({
        variant: "danger",
        message: "Ocorreu um erro ao remover item do carrinho",
      })
    );
  }
};
