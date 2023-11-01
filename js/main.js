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

function mostrarModalCodigoVazio() {
    var codigoVazioModal = new bootstrap.Modal(document.getElementById('codigoVazioModal'));
    codigoVazioModal.show();
}
