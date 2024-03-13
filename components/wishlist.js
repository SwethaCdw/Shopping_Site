import { productData } from "../services/product-service.js";
import { clearCart, getCartDetails } from "./cart.js";


let wishlist = [];

export const moveToWishlist = (selectedOption) => {
    let productIds;
    if(selectedOption == 1){
        productIds = [parseInt(prompt('Enter a product id to move to wishlist'))];
        console.log(productIds);
    } else {
        const { cart } = getCartDetails();
        productIds = cart.map(item => item.id);
        clearCart();
    }

    let wishlistProducts = productIds.map(id => productData.find(product => product.id === id));
    wishlist.push(...wishlistProducts);
    return wishlist;
}

export const getWishlistItems = () =>  wishlist;