import listProductService from "../../services/products/listProducts.service";

const listProductsController = async (request, response) => {
  try {
    const products = await listProductService();

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listProductsController;
