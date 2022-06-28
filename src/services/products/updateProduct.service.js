import database from "../../database";

const updateProductService = async ({ name, price, category_id, id }) => {
  try {
    const product = await database.query(
      "SELECT * FROM products WHERE ID = $1",
      [id]
    );

    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE ID = $4 RETURNING *",
      [
        name || product.rows[0].name,
        price || product.rows[0].price,
        category_id || product.rows[0].category_id,
        id,
      ]
    );

    if (res.rows.length === 0) {
      throw new Error("Product not found");
    }
    return {
      message: "Product Updated",
      product: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
