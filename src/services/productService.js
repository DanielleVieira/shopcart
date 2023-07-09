import { products } from "../database/products";

export const getCart = async () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const saveCart = async (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addProductToCart = async (product) => {
  const cart = await getCart();
  const newProduct = {
    ...product,
    amount: 1,
  };
  await saveCart([...cart, newProduct]);
  return newProduct;
};

// export const getProduct = async (productId) => {
//   const cart = await getCart();
//   return cart.find((product) => product.id === productId);
// };

const findProductInCart = async (productId, cart) => {
  return cart.findIndex((product) => product.id === productId);
};

export const changeProducAmount = async (productId, newAmount) => {
  const cart = await getCart();
  const productIndex = await findProductInCart(productId, cart);
  if (productIndex !== -1) {
    cart[productIndex].amount = newAmount;
    await saveCart([...cart]);
    return { ...cart[productIndex] };
  }
  return null;
};

export const removeProductToCart = async (productId) => {
  const cart = await getCart();
  const productIndex = await findProductInCart(productId, cart);
  if (productIndex !== -1) {
    const removed = cart.splice(productIndex, 1);
    await saveCart([...cart]);
    return { ...removed[0] };
  }
  return null;
};

export const getProducts = async () => {
  return products;
};
