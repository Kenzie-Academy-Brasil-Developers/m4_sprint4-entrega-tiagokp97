import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const deleteCategory = await deleteCategoryService({ id });

    return response.status(204).json(deleteCategory);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default deleteCategoryController;
