import { productData } from '../services/product-service.js';


export const searchProduct = () => {
    const productNameInput = prompt('Please enter the product name to be searched for'); 
    if (productNameInput?.trim()) {
        let productsFound = productData.filter(product => product.title.toLowerCase().includes(productNameInput.toLowerCase().trim()));
        if(productsFound.length) {
            return productsFound;
        } else {
            console.log('No products Found');
        }
    } else {
        console.log('Invalid input. Please enter valid product name');
    }
    return false;
} 