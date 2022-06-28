import database from "../../database";

const createCategoryService = async (name) => {
  try {
    const findName = await database.query(
      `SELECT
          *
      FROM
      categories
      WHERE
          name = $1`,
      [name]
    );

    if (findName.rowCount) {
      throw new Error("Category already exist");
    }

    const res = await database.query(
      "INSERT INTO categories(name) VALUES ($1) RETURNING *",
      [name]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategoryService;
