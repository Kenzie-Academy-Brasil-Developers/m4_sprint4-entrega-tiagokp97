import database from "../../database";

const updateCategoryService = async ({ name, id }) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE ID = $2 RETURNING name, id",
      [name, id]
    );

    if (res.rows.length === 0) {
      throw new Error("Categorie not found");
    }
    return {
      message: "Categorie Updated",
      category: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
