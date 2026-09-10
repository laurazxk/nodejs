const express = require("express");
const path = require("path");

const app = express();

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// FORM
app.use(express.urlencoded({ extended: true }));

// ROTAS
const categoriaRoutes = require("./routes/categoriaRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const clienteRoutes = require("./routes/clienteRoutes");

app.use("/categorias", categoriaRoutes);
app.use("/fornecedores", fornecedorRoutes);
app.use("/clientes", clienteRoutes);

// INDEX PRINCIPAL
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Página Inicial",
  });
});

// SERVER
app.listen(3000, () => {
  console.log("http://localhost:3000");
});