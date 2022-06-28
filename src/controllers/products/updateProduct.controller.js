import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const { name, price, category_id } = request.body;

  try {
    const updateProduct = await updateProductService({
      name,
      price,
      category_id,
      id,
    });

    return response.json(updateProduct);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default updateProductController;
