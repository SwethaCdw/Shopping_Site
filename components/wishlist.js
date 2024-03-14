import { productData } from "../services/product-service.js";
import { clearCart, deleteProductFromCart, getCartDetails } from "./cart.js";
import { findDuplicateAndUpdate } from '../utils/common-utils.js';

let wishlist = [];

/**
 * Move to wishlist
 * @param {*} selectedOption 
 * @returns wishlist
 */
export const moveToWishlist = (selectedOption) => {
    const { cart } = getCartDetails();
    switch(selectedOption){
        case 1:
            moveSpecificProductToWishlist(productData, 'shop');
            break;
        case 2:
            if(cart){
                cart.forEach((cartItem) => {
                    let duplicate = findDuplicateAndUpdate(wishlist, cartItem.id, false);
                    if (!duplicate) {
                        wishlist.push(cartItem);
                    }
                });
                clearCart();
            }
            break;
        case 3:
            moveSpecificProductToWishlist(cart, 'cart');
            break;


    }
    return wishlist;
}

/**
 * Move Specific product to wishlist
 * @param {*} sourceArray 
 * @param {*} sourceName 
 */
const moveSpecificProductToWishlist = (sourceArray, sourceName) => {
    const productId = parseInt(prompt(`Enter a product id to move to wishlist`));
    
    if (isNaN(productId)) {
        console.log('Invalid Product ID');
        return;
    }

    if (findDuplicateAndUpdate(wishlist, productId, false)) {
        console.log('Product already exists in wishlist');
        return;
    }

    const product = sourceArray.find(item => item.id === productId);
    if (!product) {
        console.log('Product not found in', sourceName);
        return;
    }

    wishlist.push(product);

    if (sourceName === 'cart') {
        deleteProductFromCart(productId);
    }
};

/**
 * Get wishlist items
 * @returns wishlist items
 */
export const getWishlistItems = () =>  wishlist;