import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (request, response) => {
  const { name } = request.body;

  try {
    const category = await createCategoryService(name);

    return response.status(201).json({ message: "Category update", category });
  } catch (err) {
    return response
      .status(400)
      .json({ status: "Category already exist", message: err.message });
  }
};

export default createCategoryController;
