import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listProductCategorieController from "../controllers/products/listProductCategorie.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import retrieveProductController from "../controllers/products/retrieveProduct.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const productsRouter = Router();

productsRouter.post("", createProductController);

productsRouter.get("", listProductsController);
productsRouter.get("/:id", retrieveProductController);
productsRouter.patch("/:id", updateProductController);
productsRouter.delete("/:id", deleteProductController);
productsRouter.get("/category/:category_id", listProductCategorieController);

export default productsRouter;
