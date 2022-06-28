import listCategoryService from "../../services/categories/listCategory.service";

const listCategoryController = async (request, response) => {
  try {
    const categories = await listCategoryService();

    return response.status(200).json(categories);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listCategoryController;
