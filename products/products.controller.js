import { productServices } from "./products.service.js";

const createProduct = async (req, res) => {
    try {
      const { product } = req.body;
      const result = await productServices.createProductInDB(product);
  
      res.status(200).json({
        success: true,
        message: "product added succesfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

const getAllProduct= async (req,res) =>{
    try {
        const result = await productServices.getAllProductFromDB();
    
        res.status(200).json({
          success: true,
          message: "products are retrieved succesfully",
          data: result,
        });
      } catch (err) {
        console.log(err);
      }
}
const getSingleProduct= async (req,res) =>{
    try {

        const {id} = req.params;
        const result = await productServices.getSingleProductFromDB(id);
    
        res.status(200).json({
          success: true,
          message: "product is retrieved succesfully",
          data: result,
        });
      } catch (err) {
        console.log(err);
      }
}

const getHomeKitchenProducts= async (req,res) =>{
    try {

        const result = await productServices.getHomeKitchenProductsFromDB();
    
        res.status(200).json({
          success: true,
          message: "products are retrieved succesfully",
          data: result,
        });
      } catch (err) {
        console.log(err);
      }
}
const getElectronicsProducts= async (req,res) =>{
    try {

        const result = await productServices.getElectronicsProductsFromDB();
    
        res.status(200).json({
          success: true,
          message: "products are retrieved succesfully",
          data: result,
        });
      } catch (err) {
        console.log(err);
      }
}
const getClothingProducts= async (req,res) =>{
    try {

        const result = await productServices.getClothingProductsFromDB();
    
        res.status(200).json({
          success: true,
          message: "products are retrieved succesfully",
          data: result,
        });
      } catch (err) {
        console.log(err);
      }
}

export const productController = {
    getAllProduct,
    createProduct,
    getSingleProduct,
    getHomeKitchenProducts,
    getElectronicsProducts,
    getClothingProducts
}