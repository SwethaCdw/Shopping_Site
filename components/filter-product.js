import { productData } from '../services/product-service.js';

export const filterProductsByCategory = (selectedFilter) => {
    console.log("Selected options:", selectedFilter);
    let filterValues = { minPrice : 0, maxPrice : 0, category : '' };
    selectedFilter.forEach(option => {
        switch(option){
            case 'Price':
                filterValues.minPrice = parseFloat(prompt('Enter min price'));
                filterValues.maxPrice = parseFloat(prompt('Enter max price'));
                break;
            case 'Category':
                filterValues.category = prompt('Enter the category');
                break;
        }
    });
    const filteredProducts = filterProducts(filterValues);
    console.log(filteredProducts, filterValues);
    return filteredProducts;
    
};

export const filterProducts = (filterValues) => {
    const {minPrice, maxPrice, category} = filterValues;

    return productData.filter(product => {
        if ((minPrice && product.price < minPrice) || (maxPrice && product.price > maxPrice)) {
            return false;
        }
        if (category && product.category !== category) {
            return false;
        }
        return true;
    });

}