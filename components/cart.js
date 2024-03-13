import { productData } from '../services/product-service.js';
import { findDuplicateItemById } from '../utils/common-utils.js';

const cart = []; 

export const addToCart = () => {
    const productIdInput = parseInt(prompt('Enter a product id to add to cart')); 
    if( productIdInput ) {
        const product = productData.find(({ id }) => id === productIdInput);
        if(product){
            const duplicateItemIndex = findDuplicateItemById(cart, productIdInput);
            if (duplicateItemIndex !== -1) {
                // Product already exists in the cart, increment quantity
                let duplicateItem = cart[duplicateItemIndex];
                duplicateItem.quantity++;
                duplicateItem.totalPrice = duplicateItem.price * duplicateItem.quantity;
            } else {
                cart.push({ ...product, quantity: 1, totalPrice: product.price } );
            }
            const totalCartPrice = calculateCartPrice();
            return { product, totalCartPrice };
        } else {
            console.log('Product not found.');
        }
    } else {
        console.log('Invalid input. Please enter valid product id');
    }
    return false;
};

export const clearCart = () => {
    if(cart.length){
        cart.length = 0;
        calculateCartPrice();
        console.log("Cart cleared.");
    } else {
        alert("Cart is empty. Press 'a' to Add items to cart");
    }
  };

export const getCartDetails = () => {
    let cartPrice = calculateCartPrice();
    return {cart, cartPrice};
}

export const deleteProductFromCart = () => {
    const productId = parseInt(prompt('Enter a product id to delete from cart')); 
    if(productId ) {
        const duplicateItemIndex = cart.findIndex(item => item.id === productId);
        if (duplicateItemIndex !== -1) {
            const duplicateItem = cart[duplicateItemIndex];
            if (duplicateItem.quantity > 1) {
                duplicateItem.quantity--;
                duplicateItem.totalPrice = duplicateItem.price * duplicateItem.quantity;
            } else {
                cart.splice(duplicateItemIndex, 1);
            }
            calculateCartPrice();
            return cart;
        } else {
            console.log("Product not found in the cart.");
        }
    } else {
        console.log('Invalid input. Please enter valid product id');
    }
    return false;
}

export const calculateCartPrice = () => cart.reduce((total, product) => total + product.totalPrice, 0);

