import { PRODUCTS } from '../../../app/shared/PRODUCTS';

export const selectALLProducts = () => {
    return PRODUCTS
};

export const selectProductById = (id) => {
    return PRODUCTS.find((product) => product.id === parseInt(id));
};

export const selectFeaturedProduct = () => {
    return PRODUCTS.filter((product) => product.featured);
};