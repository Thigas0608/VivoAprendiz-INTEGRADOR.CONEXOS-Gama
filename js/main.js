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

                // Abra o modal
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
                myModal.show();
            })
            .catch(function (error) {
                console.error('Erro ao fazer a solicitação GET:', error);
                
            });
    }
}
