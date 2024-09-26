// Função para fazer a solicitação GET
function fazerSolicitacaoGET() {
    var pedidoId = document.getElementById('codigo').value;

    if (pedidoId.trim() === '') {
        var codigoVazioModal = new bootstrap.Modal(document.getElementById('codigoVazioModal'));
        codigoVazioModal.show();
    } else {
        var url = 'http://localhost:3000/ordens/' + pedidoId;

        axios.get(url)
            .then(function (response) {
                var data = response.data;

                document.getElementById('modal-nome').textContent = data.nome;
                document.getElementById('modal-horario').textContent = data.horario;
                document.getElementById('modal-email').textContent = data.email;
                document.getElementById('modal-status').textContent = data.status;

                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
                myModal.show();
            })
            .catch(function (error) {
                console.error('Erro ao fazer a solicitação GET:', error);
                mostrarModalCodigoVazio();
            });
    }
}

// Função para fazer a solicitação POST
function fazerSolicitacaoPOST() {
    // Desabilitar o botão ao clicar
    var botao = document.getElementById('botaoEnviar');
    botao.disabled = true;

    // Recupere os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var plano = document.getElementById('plano').value;
    var horarioSelect = document.getElementById('horario');
    var horario = horarioSelect.options[horarioSelect.selectedIndex].value;

    // Construa o objeto de dados
    const dados = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        plano: plano,
        horario: horario,
        status: "Em Andamento"
    };

    // URL da solicitação POST
    const url = "http://localhost:3000/ordens";

    // Envie a solicitação POST usando Axios
    axios.post(url, dados)
        .then(function (response) {
            console.log("Solicitação POST bem-sucedida:", response.data);
            mostrarModalSucesso(response.data);

            // Reativar o botão após o sucesso da solicitação
            botao.disabled = false;
        })
        .catch(function (error) {
            console.error("Erro na solicitação POST:", error);

            // Reativar o botão em caso de erro
            botao.disabled = false;
        });
}


// Função para mostrar o modal de código vazio
function mostrarModalCodigoVazio() {
    var codigoVazioModal = new bootstrap.Modal(document.getElementById('codigoVazioModal'));
    codigoVazioModal.show();
}

// Função para mostrar o modal de sucesso (adicionar a implementação se ainda não existir)
function mostrarModalSucesso(data) {
    // Lógica para exibir um modal de sucesso, usando os dados retornados na resposta
    console.log("Mostrar modal de sucesso com dados:", data);
}
