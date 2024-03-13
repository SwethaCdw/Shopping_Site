import { searchProduct } from './components/search-product.js';
import { filterProductsByCategory } from './components/filter-product.js';
import { addToCart, getCartDetails, deleteProductFromCart } from './components/cart.js';
import { checkout } from './components/checkout.js';
import { checkWalletBalance, rechargeWallet } from './components/wallet.js';
import { getWishlistItems, moveToWishlist } from './components/wishlist.js';
import { multipleChoicePrompt } from './utils/common-utils.js';
import { filterChoices } from './constants/shop-constants.js';

document.addEventListener('keydown', function(event) {

    switch(event.key){
        case 's' || 'S':
            console.log('SEARCH FOR A PRODUCT');
            const productsFound = searchProduct();
            if(productsFound) {
                console.log('Products Found', productsFound);
            }
            break;
        case 'f' || 'F':
            console.log('FILTER PRODUCT BASED ON CATEGORIES');
            const selectedOptions = multipleChoicePrompt("Please select an option:", filterChoices);
            if (selectedOptions.length > 0) {
                const filteredProducts = filterProductsByCategory(selectedOptions);
                console.log('Result Products', filteredProducts);
            } else {
                console.log("User didn't select any options");
            }
            break;
        case 'a' || 'A':
            console.log('ADD TO CART');
            const { product, totalCartPrice } = addToCart();
            if(product && totalCartPrice){
                console.log(`Added ${product.title} to cart. Total Cart Price is ${totalCartPrice}`);
            }
            break;
        case 'd' || 'D':
            console.log('DISPLAY CART DETAILS');
            const {cart, cartPrice} = getCartDetails();
            console.log('Cart -->', cart);
            console.log(`Total cart price ${cartPrice}`)
            break;
        case 'x' || 'X':
            console.log('DELETE CART ITEM');
            const cartDetails = deleteProductFromCart();
            if(cartDetails){
                console.log('Updated cart items', cartDetails);
            }
            break;
        case 'c' || 'C':
            console.log('CHECKOUT');
            checkout();
            break;
        case 'r' || 'R':
            console.log('RECHARGE WALLET');
            const walletAmount = rechargeWallet();
            if(walletAmount){
                console.log(`Succesfully recharged wallet, Total balance is ${walletAmount}`)
            }
            break;
        case 'b' || 'B':
            const walletBalance = checkWalletBalance();
            console.log(`WALLET BALANCE : ${walletBalance}`);
            break;
        case 'm' || 'M':
            console.log('MOVE TO WISHLIST');
            const option = prompt(`Type '1' - Add a product to wishlist' (or) Type '2' - Move cart items to wishlist`);
            const wishlist = moveToWishlist(option);
            console.log('Wishlist items : ', wishlist);
            break;
        case 'w' || 'W':
            console.log('GET WISHLIST ITEMS');
            const wishlistItems = getWishlistItems();
            if(wishlistItems.length) {
                console.log('Wishlist Items:', wishlistItems);
            } else {
                console.log('Wishlist is empty. Press "m" to add items to Wishlist');
            }
            break;
    }

});
