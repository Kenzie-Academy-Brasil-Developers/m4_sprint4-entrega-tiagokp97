import "dotenv/config";
import { startDatabase } from "./database";
import express from "express";
import productsRouter from "./routes/products.routes";
import categoriesRouter from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World Kenzie",
  });
});

export default app.listen(process.env.PORT, () => {
  console.log(`Server running in port 3000!`);
  startDatabase();
});

// app.listen(process.env.ENV === "test" ? 3001 : 3000, () => {
//   console.log("Executando na porta 3000");
//   startDatabase();
// });

// export default app;
