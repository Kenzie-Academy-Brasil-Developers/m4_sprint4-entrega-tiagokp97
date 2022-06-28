import database from "../../database";

const listProductCategorieService = async ({ category_id }) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name as Category FROM products p LEFT JOIN categories c ON c.id = p.category_id WHERE category_id = $1",
      [category_id]
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductCategorieService;
