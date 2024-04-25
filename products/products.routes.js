import  express  from "express";
import { productController } from "./products.controller.js";


const router = express.Router()

router.get("/", productController.getAllProduct);

router.post("/add-product", productController.createProduct);

router.get("/product/:id", productController.getSingleProduct);

router.get("/Electronics", productController.getElectronicsProducts);

router.get("/Clothing", productController.getClothingProducts);

router.get("/Home_&_Kitchen", productController.getHomeKitchenProducts);


export  const productRoutes = router;