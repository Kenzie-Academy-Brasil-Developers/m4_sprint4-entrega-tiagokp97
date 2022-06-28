import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const update = await updateCategoryService({ name, id });

    return response.json(update);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default updateCategoryController;
