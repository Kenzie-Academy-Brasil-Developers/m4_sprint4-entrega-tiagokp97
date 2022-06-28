import listProductCategorieService from "../../services/products/listProductCategorie.service";

const listProductCategorieController = async (request, response) => {
  const { category_id } = request.params;

  try {
    const products = await listProductCategorieService({ category_id });

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listProductCategorieController;
