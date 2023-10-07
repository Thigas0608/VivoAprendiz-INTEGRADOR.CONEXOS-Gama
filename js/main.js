// Função para fazer a solicitação GET
function fazerSolicitacaoGET() {
    const codigoDoPedido = document.querySelector("#codigo").value;

    // Fazer a solicitação GET para http://localhost:3000/ordens/id
    axios.get(`http://localhost:3000/ordens/${codigoDoPedido}`)
        .then(function (response) {
            // Lógica para lidar com a resposta do servidor
            const dadosDaOrdem = response.data;
            // Faça algo com os dados recuperados, por exemplo, exibi-los na página
            console.log(dadosDaOrdem);
        })
        .catch(function (error) {
            // Lógica para lidar com erros, se necessário
            console.error(error);
        });
}

// Associar a função ao evento onclick de um botão
const botaoVerificarStatus = document.querySelector(".buttonVerificarStatus");
botaoVerificarStatus.onclick = fazerSolicitacaoGET;
