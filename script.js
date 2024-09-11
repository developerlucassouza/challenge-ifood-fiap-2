//import { Receita } from './Receita.js';

// AJUSTAR TAMANHO DO MENU/
let menu = document.querySelector('#menu');
if (window.innerWidth >= 768) {
    menu.style.display = 'block';
} else {
    menu.style.display = 'none';
}


// MENU BURGUER
document.querySelector('#menu-icon').addEventListener('click', menuBurguer);
function menuBurguer() {
    let menu = document.querySelector('#menu');
    let main = document.querySelector('main.container');
    // alert('|' + menu.style.display + '|');
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        if (window.innerWidth >= 768) {
            main.style.marginLeft = 'auto';
        }
    } else {
        menu.style.display = 'block';
        if (window.innerWidth >= 768) {
            main.style.marginLeft = '16.7vw';
        }
    }
};





// MODAL PREENCHA TODOS OS CAMPOS OBRIGATÓRIOS
function modalPreenchaCampos() {
    document.querySelector('body').innerHTML += `
    <div id="modalPreenchaCampos" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title">Atenção aos Campos!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Preencha todos os campos de preenchimento obrigatório.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
    `;

    // Exibe o modal
    $('#modalPreenchaCampos').modal('show');

    // Remove o modal do DOM após ele ser completamente fechado
    $('#modalPreenchaCampos').on('hidden.bs.modal', function () {
        //$('#modalPreenchaCampos').remove();  // Remove o modal
        //$('.modal-backdrop').remove();       // Remove o backdrop, caso fique preso
        location.reload();
    });
}





// INSERIR RECEITA
function inserirReceita() {
    // Captura os valores dos campos de input
    let receita = document.querySelector('input#receita').value;
    let valor = document.querySelector('input#valor').value;
    let metodo_pagamento = document.querySelector('select#metodo_pagamento').value;
    let observacoes = document.querySelector('textarea#observacoes').value;

    // Verifica se os campos obrigatórios foram preenchidos
    if (receita == '' || valor == '') {
        $('#modalCreate').modal('hide'); // Fecha o modal
        modalPreenchaCampos(); // Exibe o modal de erro
    } else {
        // Cria a data atual formatada
        const date = new Date();
        let data = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        // Cria um array com os dados da nova receita
        let novaReceita = [receita, valor, metodo_pagamento, observacoes, data];

        // Recupera o array de receitas do localStorage
        let receitas = JSON.parse(localStorage.getItem('receitas'));

        // Se não houver dados de receitas, inicializa um array vazio
        if (receitas === 'receitas' || receitas === null) {
            receitas = [];
        }

        // Adiciona a nova receita ao array de receitas
        receitas.push(novaReceita);

        // Salva o array de receitas atualizado no localStorage
        localStorage.setItem('receitas', JSON.stringify(receitas));

        $('#modalCreate').modal('hide');
        document.querySelector('body').innerHTML += `
        <div id="modal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-success">
                        <h5 class="modal-title">Sucesso!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Receita Inserida com Sucesso!.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Exibe o modal
        $('#modal').modal('show');

        // Remove o modal do DOM após ele ser completamente fechado
        $('#modal').on('hidden.bs.modal', function () {
            //$('#modal').remove();  // Remove o modal
            //$('.modal-backdrop').remove();       // Remove o backdrop, caso fique preso
            location.reload();
        });
    }
}

// EXCLUIR RECEITA
function excluirReceita(id) {
    // Recupera o array de receitas do localStorage
    let receitas = JSON.parse(localStorage.getItem('receitas'));
    receitas.splice(id, 1);
    localStorage.setItem('receitas', JSON.stringify(receitas));

    document.querySelector('body').innerHTML += `
        <div id="modal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-success">
                        <h5 class="modal-title">Sucesso!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Receita Excluida com Sucesso!.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Exibe o modal
        $('#modal').modal('show');

        // Remove o modal do DOM após ele ser completamente fechado
        $('#modal').on('hidden.bs.modal', function () {
            //$('#modal').remove();  // Remove o modal
            //$('.modal-backdrop').remove();       // Remove o backdrop, caso fique preso
            location.reload();
        });
}































