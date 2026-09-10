//model - bd
const db = require("../config/firebase");
const ref = db.ref("clientes");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        email: dados[id].email
    }));
}

//exportar
module.exports = {
    listar
};

//salvar
async function salvar(cliente) {
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nome: cliente.nome
    });
}

//exportar
module.exports = {
    listar,
    salvar
};