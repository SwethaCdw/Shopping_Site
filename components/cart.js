import { productData } from '../services/product-service.js';
import { findDuplicateAndUpdate } from '../utils/common-utils.js';

const cart = []; 

/**
 * Add product item to cart
 * @returns cart Item and Cart Price
 */
export const addToCart = () => {
    const productIdInput = parseInt(prompt('Enter a product id to add to cart')); 
    if (!productIdInput) {
        console.log('Invalid input. Please enter a valid product id.');
        return false;
    }
    
    const product = productData.find(({ id }) => id === productIdInput);
    if (!product) {
        console.log('Product not found.');
        return false;
    }

    const duplicate = findDuplicateAndUpdate(cart, productIdInput, false);
    if (!duplicate) {
        cart.push({ ...product, quantity: 1, totalPrice: product.price });
    }

    const totalCartPrice = calculateCartPrice();
    return { product, totalCartPrice };
};

/**
 * Clear all items from cart
 */
export const clearCart = () => {
    if(cart.length){
        cart.length = 0;
        console.log("Cart cleared.");
    } else {
        alert("Cart is empty. Press 'a' to Add items to cart");
    }
  };

  /**
   * Get Cart Details
   * @returns cart and cart Price
   */
export const getCartDetails = () => {
    let cartPrice = calculateCartPrice();
    return {cart, cartPrice};
    
}

/**
 * Delete product 
 * @param {*} productId 
 * @returns 
 */
export const deleteProductFromCart = (productId = parseInt(prompt('Enter a product id to delete from cart'))) => {
    if (!productId) {
        console.log('Invalid input. Please enter a valid product id.');
        return false;
    }

    const deletedItem = findDuplicateAndUpdate(cart, productId, true);
    if (!deletedItem) {
        console.log("Product not found in the cart.");
        return false;
    }

    return deletedItem;
}

/**
 * Calculate cart price
 * @returns total price in cart
 */
export const calculateCartPrice = () => cart.reduce((total, product) => total + product.totalPrice, 0);

