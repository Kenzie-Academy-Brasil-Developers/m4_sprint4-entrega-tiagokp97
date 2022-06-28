import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import retrieveCategoriesController from "../controllers/categories/retrieveCategory.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";

const categoriesRouter = Router();

categoriesRouter.post("", createCategoryController);
categoriesRouter.get("", listCategoryController);
categoriesRouter.patch("/:id", updateCategoryController);
categoriesRouter.get("/:id", retrieveCategoriesController);
categoriesRouter.delete("/:id", deleteCategoryController);

export default categoriesRouter;
