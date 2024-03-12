import { productData } from '../services/product-service.js';

const cart = [];

export const addToCart = (productId) => {
    const product = productData.find(product => product.id == productId);
    cart.push(product);
    const totalCartPrice = getCartPrice();
    return {product, totalCartPrice};
};

export const clearCart = () => {
    cart.length = 0;
    console.log("Cart cleared.");
  };

export const displayCart = () => {
    let cartPrice = getCartPrice()
    return {cart, cartPrice};
}

export const deleteProductFromCart = (productId) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      cart.splice(index, 1)[0];
    } else {
      console.log("Product not found in the cart.");
    }
}

export const getCartPrice = () => cart.reduce((total, product) => total + product.price, 0);
