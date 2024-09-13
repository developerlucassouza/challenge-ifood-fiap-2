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





// INSERIR DESPESA
function inserirDespesa() {
    // Captura os valores dos campos de input
    let despesa = document.querySelector('input#despesa').value;
    let valor = document.querySelector('input#valor').value;
    let observacoes = document.querySelector('textarea#observacoes').value;

    // Verifica se os campos obrigatórios foram preenchidos
    if (despesa == '' || valor == '') {
        $('#modalCreate').modal('hide'); // Fecha o modal
        modalPreenchaCampos(); // Exibe o modal de erro
    } else {
        // Cria a data atual formatada
        const date = new Date();
        let data = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        // Cria um array com os dados da nova despesa
        let novaDespesa = [despesa, valor, observacoes, data];

        // Recupera o array de despesas do localStorage
        let despesas = JSON.parse(localStorage.getItem('despesas'));

        // Se não houver dados de despesas, inicializa um array vazio
        if (despesas === 'receitas' || despesas === null) {
            despesas = [];
        }

        // Adiciona a nova despesa ao array de despesas
        despesas.push(novaDespesa);

        // Salva o array de despesas atualizado no localStorage
        localStorage.setItem('despesas', JSON.stringify(despesas));

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
                        <p>Despesa Inserida com Sucesso!.</p>
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

// EXCLUIR DESPESA
function excluirDespesa(id) {
    // Recupera o array de despesas do localStorage
    let despesas = JSON.parse(localStorage.getItem('despesas'));
    despesas.splice(id, 1);
    localStorage.setItem('despesas', JSON.stringify(despesas));

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
                        <p>Despesa Excluida com Sucesso!.</p>
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







// DESPESAS TOTAIS
function despesasTotais() {
    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    let despesaTotal = 0;
    
    for (let c = 0; c < despesas.length; c++) {
        despesaTotal += Number(despesas[c][1]);
    }
    
    return despesaTotal;
}

// RECEITAS TOTAIS
function receitasTotais() {
    let receitas = JSON.parse(localStorage.getItem('receitas')) || [];
    let receitaTotal = 0;
    
    for (let c = 0; c < receitas.length; c++) {
        receitaTotal += Number(receitas[c][1]);
    }
    
    return receitaTotal;
}

document.addEventListener('DOMContentLoaded', function() {
    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    document.getElementById('total-receitas').textContent = formatarMoeda(receitasTotais());
});

document.addEventListener('DOMContentLoaded', function() {
    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    document.getElementById('total-despesas').textContent = formatarMoeda(despesasTotais());
});

document.addEventListener('DOMContentLoaded', function() {
    function lucroTotal() {
        let lucroTotal = receitasTotais() - despesasTotais()
        
        return lucroTotal;
    }

    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    document.getElementById('total-lucro').textContent = formatarMoeda(lucroTotal());
});





// GRÁFICOS
document.addEventListener('DOMContentLoaded', function() {
    function receitasTotais() {
        // Exemplo de receitas [categoria, valor]
        let receitas = JSON.parse(localStorage.getItem('receitas')) || [
            ['Vendas', 1000],
            ['Serviços', 1500],
            ['Investimentos', 500]
        ];

        return receitas;
    }

    function despesasTotais() {
        // Exemplo de despesas [categoria, valor]
        let despesas = JSON.parse(localStorage.getItem('despesas')) || [
            ['Aluguel', 800],
            ['Salários', 1200],
            ['Marketing', 400]
        ];

        return despesas;
    }

    // Função para gerar gráfico
    function criarGrafico(id, tipo, labels, data, labelGrafico, cor) {
        const ctx = document.getElementById(id).getContext('2d');
        new Chart(ctx, {
            type: tipo,
            data: {
                labels: labels,
                datasets: [{
                    label: labelGrafico,
                    data: data,
                    backgroundColor: cor,
                    borderColor: cor,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Receitas
    const receitas = receitasTotais();
    const labelsReceitas = receitas.map(receita => receita[0]);
    const dataReceitas = receitas.map(receita => receita[1]);

    criarGrafico('graficoReceitas', 'bar', labelsReceitas, dataReceitas, 'Receitas', 'rgba(75, 192, 192, 0.6)');

    // Despesas
    const despesas = despesasTotais();
    const labelsDespesas = despesas.map(despesa => despesa[0]);
    const dataDespesas = despesas.map(despesa => despesa[1]);

    criarGrafico('graficoDespesas', 'bar', labelsDespesas, dataDespesas, 'Despesas', 'rgba(255, 99, 132, 0.6)');
});





// GRAFICO DE LUCRO
document.addEventListener('DOMContentLoaded', function() {
    function receitasTotais() {
        // Exemplo de receitas [categoria, valor]
        let receitas = JSON.parse(localStorage.getItem('receitas')) || [
            ['Vendas', 10],
            ['Serviços', 30],
            ['Investimentos', 20]
        ];

        return receitas;
    }

    function despesasTotais() {
        // Exemplo de despesas [categoria, valor]
        let despesas = JSON.parse(localStorage.getItem('despesas')) || [
            ['Aluguel', 2],
            ['Salários', 15]
        ];

        return despesas;
    }

    // Função para calcular lucros acumulados
    function calcularLucrosAcumulados(receitas, despesas) {
        const todasCategorias = new Set();

        // Adiciona todas as categorias das receitas e despesas no Set
        receitas.forEach(item => todasCategorias.add(item[0]));
        despesas.forEach(item => todasCategorias.add(item[0]));

        const receitasMap = new Map(receitas);
        const despesasMap = new Map(despesas);

        let lucrosAcumulados = [];
        let lucroAcumulado = 0;

        todasCategorias.forEach(categoria => {
            const receita = receitasMap.get(categoria) || 0;  // Se não existir receita, define 0
            const despesa = despesasMap.get(categoria) || 0;  // Se não existir despesa, define 0

            // Calcula o lucro atual e acumula no lucro total
            lucroAcumulado += receita - despesa;
            lucrosAcumulados.push(lucroAcumulado);
        });

        return {
            categorias: Array.from(todasCategorias),
            lucrosAcumulados: lucrosAcumulados
        };
    }

    // Receitas e Despesas
    const receitas = receitasTotais();
    const despesas = despesasTotais();

    // Obter todas as categorias únicas e calcular lucros acumulados
    const { categorias, lucrosAcumulados } = calcularLucrosAcumulados(receitas, despesas);

    // Obter valores de receitas e despesas alinhados às categorias
    const receitasMap = new Map(receitas);
    const despesasMap = new Map(despesas);

    const dataReceitas = categorias.map(categoria => receitasMap.get(categoria) || 0);
    const dataDespesas = categorias.map(categoria => (despesasMap.get(categoria) || 0) * -1);  // Transformando despesas em valores negativos

    // Função para gerar gráfico combinado
    const ctx = document.getElementById('graficoReceitasDespesas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',  // Gráfico principal é do tipo barras
        data: {
            labels: categorias,
            datasets: [
                {
                    label: 'Receitas',
                    data: dataReceitas,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Despesas',
                    data: dataDespesas,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Lucro Total',
                    data: lucrosAcumulados,
                    type: 'line',  // Adicionando o gráfico de linha
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

















