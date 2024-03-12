import { productData } from '../services/product-service.js';


export const searchProduct = (productName) => productData.find(product => product.title.toLowerCase().includes(productName.toLowerCase()));

export const filterProducts = (priceRange, category) => {
    productData.find(product => product.price <= priceRange && product.category.toLowerCase().includes(category.toLowerCase()));
}