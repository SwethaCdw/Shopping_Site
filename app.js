import { productData } from './services/product-service.js';
import { searchProduct, filterProducts } from './components/search-product.js';
import { filterProductsByCategory } from './components/filter-product.js';
import {addToCart, displayCart, deleteProductFromCart} from './components/cart.js';
console.log(productData);

document.addEventListener('keydown', function(event) {

switch(event.key){
    case 's' || 'S':
        console.log('Search for a Product');
        const productNameInput = prompt('Please enter the product name to be searched for'); 
        console.log(searchProduct(productNameInput));
        break;
    case 'f' || 'F':
        console.log('Filter the product based on value');
        const choices = ['Price', 'Category'];
        const selectedOptions = multipleChoicePrompt("Please select an option:", choices);
        if (selectedOptions.length > 0) {
            console.log("Selected options:", selectedOptions);
        } else {
            console.log("User didn't select any options.");
        }
        // const categoryInput = prompt('Please enter the category to filter the products'); 
        // console.log(filterProducts(categoryInput));
        // console.log(filterProductsByCategory(categoryInput));
        break;
    case 'a' || 'A':
        console.log('Add to cart');
        const productIdInput = prompt('Enter a product id to add to cart'); 
        const {product, totalCartPrice } = addToCart(productIdInput);
        console.log(`Added ${product.title} to cart.`);
        console.log(`Total Cart Price is ${totalCartPrice}`);
        break;
    case 'd' || 'D':
        console.log('Display Cart Details');
        const {cart, cartPrice} = displayCart();
        console.log('Cart -->', cart);
        console.log(`Total cart price ${cartPrice}`)
        break;
    case 'x' || 'X':
        console.log('Delete cart item');
        const productId = prompt('Enter a product id to delete from cart'); 
        const {deletedProduct} = deleteProductFromCart(productId);
        console.log(`Product ${deletedProduct.title} is deleted from cart!`);
        break;




}

});

function multipleChoicePrompt(message, choices) {
    const selectedOptions = [];
    
    choices.forEach(choice => {
        const isConfirmed = confirm(`${message}\n\n${choice}`);
        if (isConfirmed) {
            selectedOptions.push(choice);
        }
    });

    return selectedOptions;
}