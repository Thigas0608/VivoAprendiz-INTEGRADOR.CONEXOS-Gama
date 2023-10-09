function fazerSolicitacaoGET() {
    var pedidoId = document.getElementById('codigo').value;
    
    // Verifica se o campo do código do pedido está vazio
    if (pedidoId.trim() === '') {
        // Se estiver vazio, mostre o modal de aviso
        var codigoVazioModal = new bootstrap.Modal(document.getElementById('codigoVazioModal'));
        codigoVazioModal.show();
    } else {
        var url = 'http://localhost:3000/ordens/' + pedidoId;

        axios.get(url)
            .then(function (response) {
                var data = response.data; 

                
                document.getElementById('modal-nome').textContent = data.nome;
                document.getElementById('modal-cpf').textContent = data.cpf;
                document.getElementById('modal-telefone').textContent = data.telefone;
                document.getElementById('modal-email').textContent = data.email;
                document.getElementById('modal-plano').textContent = data.plano;
                document.getElementById('modal-horario').textContent = data.horario;
                document.getElementById('modal-status').textContent = data.status;

                // Abra o modal
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
                myModal.show();
            })
            .catch(function (error) {
                console.error('Erro ao fazer a solicitação GET:', error);
                
            });
    }
}
function fazerSolicitacaoGET() {
    var pedidoId = document.getElementById('codigo').value;
    
    // Verifica se o campo do código do pedido está vazio
    if (pedidoId.trim() === '') {
        // Se estiver vazio, mostre o modal de aviso
        var codigoVazioModal = new bootstrap.Modal(document.getElementById('codigoVazioModal'));
        codigoVazioModal.show();
    } else {
        var url = 'http://localhost:3000/ordens/' + pedidoId;

        axios.get(url)
            .then(function (response) {
                var data = response.data; 

                document.getElementById('modal-nome').textContent = data.nome;
                document.getElementById('modal-cpf').textContent = data.cpf;
                document.getElementById('modal-telefone').textContent = data.telefone;
                document.getElementById('modal-email').textContent = data.email;
                document.getElementById('modal-plano').textContent = data.plano;
                document.getElementById('modal-horario').textContent = data.horario;
                document.getElementById('modal-status').textContent = data.status;

                // Abra o modal
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
                myModal.show();
            })
            .catch(function (error) {
                console.error('Erro ao fazer a solicitação GET:', error);
            });
    }
}

function enviarDados() {
    // Recupere os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var plano = document.getElementById('plano').value;
    var horarioSelect = document.getElementById('horario'); // Altere o ID para 'horario'

    // Obtenha o valor selecionado do campo de seleção de horário
    var horario = horarioSelect.options[horarioSelect.selectedIndex].value;

    // Resto do código permanece inalterado
    const dados = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        plano: plano,
        horario: horario,
        status: "Em Andamento"
    };

    const url = "http://localhost:3000/ordens";

    axios.post(url, dados)
        .then(function (response) {
            console.log("Solicitação POST bem-sucedida:", response.data);
        })
        .catch(function (error) {
            console.error("Erro na solicitação POST:", error);
        });
}
