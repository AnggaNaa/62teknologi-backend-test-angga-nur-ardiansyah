const express = require("express");
const app = express();
const db = require("./src/config/db");
const port = 3000;
const businessesController = require("./src/controllers/businessesController");

app.use(express.json());

app.get("/businesses", businessesController.getAll);
app.post("/businesses", businessesController.create);
app.patch("/businesses/:id", businessesController.update);
app.delete("/businesses/:id", businessesController.delete);
app.get("/businesses/search", businessesController.search);

app.listen(port, async () => {
  await db.sync();
  console.log("Server is running on port 3000");
});
