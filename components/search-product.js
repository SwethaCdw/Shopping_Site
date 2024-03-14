import { productData } from '../services/product-service.js';

/**
 * Search a product by product name/title
 * @returns products Found
 */
export const searchProduct = () => {
    const productNameInput = prompt('Please enter the product name to be searched for')?.trim();
    if (!productNameInput) {
        console.log('Invalid input. Please enter a valid product name');
        return false;
    } 
    const productsFound = productData.filter(product => product.title.toLowerCase().includes(productNameInput.toLowerCase())); 
    if (productsFound.length === 0) {
        console.log('No products found');
        return false;
    }
    return productsFound;
};