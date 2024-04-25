import { productSchema } from "./products.model.js";


const createProductInDB = async (data) => {
    const result = productSchema.create(data);
    return result
};

const getAllProductFromDB = async () => {
    const result = await productSchema.find();
    return result;
  };

const getSingleProductFromDB = async (Id) => {
    const result = await productSchema.findOne({_id: Id});
    return result;
};

const getHomeKitchenProductsFromDB = async () => {
    const result = await productSchema.find({category: "Home & Kitchen"});
    return result;
};
const getElectronicsProductsFromDB = async () => {
    const result = await productSchema.find({category: "Electronics"});
    return result;
};
const getClothingProductsFromDB = async () => {
    const result = await productSchema.find({category: "Clothing"});
    return result;
};

export const productServices = {
    getAllProductFromDB,
    createProductInDB,
    getSingleProductFromDB,
    getClothingProductsFromDB,
    getElectronicsProductsFromDB,
    getHomeKitchenProductsFromDB

}