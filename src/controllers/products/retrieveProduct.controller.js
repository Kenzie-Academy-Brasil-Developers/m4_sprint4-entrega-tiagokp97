import retrieveProductsService from "../../services/products/retrieveProduct.service";

const retrieveProductController = async (request, response) => {
  const { id } = request.params;
  try {
    const product = await retrieveProductsService({ id });

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default retrieveProductController;
