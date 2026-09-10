const model = require("../models/fornecedorModel");

//listar
exports.index = async (req, res) => {
    let fornecedores = await model.listar();

    res.render("fornecedores/index", {
        fornecedores,
        fornecedorEditar: null
    });
};

//salvar
exports.salvar = async (req, res) => {
    await model.salvar({
        nome: req.body.nome.toUpperCase()
    });

    res.redirect("/fornecedores");
};