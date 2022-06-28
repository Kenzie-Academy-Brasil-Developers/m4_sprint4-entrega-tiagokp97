import retrieveCategoryService from "../../services/categories/retrieveCategory.service";

const retrieveCategoryController = async (request, response) => {
  const { id } = request.params;
  try {
    const category = await retrieveCategoryService({ id });

    return response.status(200).json(category);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default retrieveCategoryController;
