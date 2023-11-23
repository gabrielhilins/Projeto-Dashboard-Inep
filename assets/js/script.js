let dadosCSV;
let grafico;
let serieSelecionada;
let cabecalhos;

const entradaArquivoCSV = document.getElementById('csvFile');
const selecaoSeries = document.getElementById('series');
const selecaoTipoGrafico = document.getElementById('chartType');
const chartCanvas = document.getElementById('chartCanvas');

entradaArquivoCSV.addEventListener('change', processarSelecaoArquivo);
selecaoSeries.addEventListener('change', function () {
    serieSelecionada = selecaoSeries.value;
    atualizarGrafico();
});

function processarSelecaoArquivo(evento) {
    const arquivo = evento.target.files[0];
    Papa.parse(arquivo, {
        complete: function (resultado) {
            dadosCSV = resultado.data;
            cabecalhos = dadosCSV[0];
            popularSelecaoSeries();
            serieSelecionada = cabecalhos[0];
            popularPreviaDados();
            atualizarGrafico(); 
        }
    });
}

function popularSelecaoSeries() {
    cabecalhos.forEach(cabecalho => {
        const opcao = document.createElement('option');
        opcao.value = cabecalho;
        opcao.textContent = cabecalho;
        selecaoSeries.appendChild(opcao);
    });
}

function atualizarGrafico() {
    if (!dadosCSV || dadosCSV.length < 2) {
        console.error("Não há dados suficientes para criar o gráfico.");
        return;
    }
    if (grafico) {
        grafico.destroy();
    }

    const rotulos = dadosCSV.slice(1).map(linha => linha[0]);
    const dados = dadosCSV.slice(1).map(linha => parseFloat(linha[cabecalhos.indexOf(serieSelecionada)]));

    grafico = new Chart(chartCanvas, {
        type: selecaoTipoGrafico.value,
        data: {
            labels: rotulos,
            datasets: [{
                label: serieSelecionada,
                data: dados,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}

function popularPreviaDados() {
    const tabela = document.createElement('table');
    const linhaCabecalho = document.createElement('tr');
    
    cabecalhos.forEach(cabecalho => {
        const th = document.createElement('th');
        th.textContent = cabecalho;
        linhaCabecalho.appendChild(th);
    });
    
    tabela.appendChild(linhaCabecalho);

    const numLinhasExibicao = 5; // Defina o número desejado de linhas a serem exibidas

    for (let i = 0; i < numLinhasExibicao && i < dadosCSV.length; i++) {
        const linha = dadosCSV[i];
        const linhaDados = document.createElement('tr');
        
        linha.forEach(celula => {
            const td = document.createElement('td');
            td.textContent = celula;
            linhaDados.appendChild(td);
        });

        tabela.appendChild(linhaDados);
    }

    const previaDados = document.getElementById('dataPreview');
    previaDados.innerHTML = '';
    previaDados.appendChild(tabela);
}


function exportarGrafico() {
    const imagem = chartCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imagem;
    link.download = 'grafico.png';
    link.click();
}