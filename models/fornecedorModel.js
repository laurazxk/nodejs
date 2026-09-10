// model - bd
const db = require("../config/firebase");
const ref = db.ref("fornecedores");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        cnpj: dados[id].cnpj
    }));
}

//exportar
module.exports = {
    listar
};

//salvar
async function salvar(fornecedor) {
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nome: fornecedor.nome
    });
}

//exportar
module.exports = {
    listar,
    salvar
};