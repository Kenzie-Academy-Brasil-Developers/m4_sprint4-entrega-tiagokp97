import database from "../../database";

const retrieveCategoryService = async ({ id }) => {
  try {
    const res = await database.query(`SELECT * FROM categories WHERE id = $1`, [
      id,
    ]);

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default retrieveCategoryService;
