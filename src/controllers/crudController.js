function listarDados(request, response) {
    response.send('Get: listar produtos');
}

function gravarDados(request, response) {
    response.send('Post: cadastrar produto');
}

function atualizarDados(request, response) {
    response.send('Put: editar produto');
}

function deletarDados(request, response) {
    response.send('Delete: deletar produto');
}

module.exports = {
    listarDados,
    gravarDados, 
    atualizarDados, 
    deletarDados
}