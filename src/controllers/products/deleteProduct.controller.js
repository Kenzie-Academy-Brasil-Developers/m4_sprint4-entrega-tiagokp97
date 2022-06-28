import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const deleteProduct = await deleteProductService({ id });

    return response.status(204).json(deleteProduct);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default deleteProductController;
