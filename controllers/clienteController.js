const model = require("../models/clienteModel");

//listar
exports.index = async (req, res) => {
    let clientes = await model.listar();

    res.render("clientes/index", {
        clientes,
        clienteEditar: null
    });
};

//salvar
exports.salvar = async (req, res) => {
    await model.salvar({
        nome: req.body.nome.toUpperCase()
    });

    res.redirect("/clientes");
};