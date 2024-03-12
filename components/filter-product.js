import { productData } from '../services/product-service.js';

// export const filterProductsByCategory = (category) => productData.filter(product => product.category.toLowerCase() === category.toLowerCase());

export const filterProductsByCategory = (searchValue) => {
    searchValue = searchValue.toLowerCase().trim();
    return productData.filter(product => {
        for (let key in product) {
            if (typeof product[key] === 'string' && product[key].toLowerCase().includes(searchValue)) {
                return true;
            }
        }
        return false;
    });
};