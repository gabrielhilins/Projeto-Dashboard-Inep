var LABELS_CSV = [];
var DATA_CSV = {};

var chartBar = null;
// Função para criar um gráfico de barras

// Gráfico de Barras
function criarGraficoDeBarras(data) {
  const ctx = document.getElementById('barChart').getContext('2d');
  if(chartBar){
    chartBar.clear();
    chartBar.destroy();
  }
  chartBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Valores',
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true // Opção para começar o Eixo Y do Zero
        }
      }
    }
  });
}

// Gráfico de Pizza
var chartPizza = null;
// Função para criar um gráfico de pizza
function criarGraficoDePizza(data) {
  const ctx = document.getElementById('pieChart').getContext('2d');
  if(chartPizza){
    chartPizza.clear();
    chartPizza.destroy();
  }
  chartPizza = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: data.labels,
      datasets: [{
        data: data.values,
        backgroundColor: ["#5056BF", "#65A6FA", "#6D74F2", "#9B57CC", "#00CADC"],
        borderColor: "#FFFFFF",
        borderWidth: 2,
      }]
    }
  });
}

// Gráfico de Linhas
var chartLines = null;
// Função para criar um gráfico de linhas
function criarGraficoDeLinhas(data) {
  const ctx = document.getElementById('lineChart').getContext('2d');
  if(chartLines){
    chartLines.clear();
    chartLines.destroy();
  }
  chartLines = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Valores',
        data: data.values,
        fill: true, // Preencher área sob curvas
        tension: 0.4, // Suavizar curvas
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    }
  });
}
// ...

// Gráfico de Barras Horizontais
var chartHorizontalBar = null;
function criarGraficoDeBarrasHorizontais(data) {
    const ctx = document.getElementById('horizontalBarChart').getContext('2d');
    if (chartHorizontalBar) {
        chartHorizontalBar.clear();
        chartHorizontalBar.destroy();
    }
    chartHorizontalBar = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Valores',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true // Opção para começar o Eixo X do Zero
                }
            }
        }
    });
}

// Função para ler e adicionar o selecionar series 
const addSelectOptions = (options) => {
  options.forEach(option => {
    const htmlOption = document.createElement('option');
    htmlOption.value = option;
    htmlOption.innerHTML = option;
    document.getElementById('series').appendChild(htmlOption);
  });
}

// Função para analisar o arquivo CSV
function analisarCSV(file) {
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function (results) {
      const raw_data = results.data;
      data_csv = raw_data;

      LABELS_CSV = Object.keys(raw_data[0]).filter((key) => key);
      addSelectOptions(LABELS_CSV);

      DATA_CSV[LABELS_CSV[0]] = [];
      DATA_CSV[LABELS_CSV[1]] = [];
      DATA_CSV[LABELS_CSV[2]] = [];
      const labels = [];
      for (const index in data_csv) {
        const data = data_csv[index];
        DATA_CSV[LABELS_CSV[0]].push(data[LABELS_CSV[0]]);
        DATA_CSV[LABELS_CSV[1]].push(data[LABELS_CSV[1]]);
        DATA_CSV[LABELS_CSV[2]].push(data[LABELS_CSV[2]]);
        labels.push(data[LABELS_CSV[0]]);
      }
      DATA_CSV['labels'] = labels;
      console.log(DATA_CSV);
    }
  });
}

// Evento de seleção de arquivo CSV
document.getElementById('csvFile').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) analisarCSV(file);
});


// Função para exportar gráfico como imagem
function exportarGrafico(chartId) {
    const chartContainer = document.getElementById(chartId);
    var chart = null;

    if (chartId === 'barChart') chart = chartBar;
    else if (chartId === 'pieChart') chart = chartPie;
    else if (chartId === 'lineChart') chart = chartLines;
    else if (chartId === 'horizontalBarChart') chart = chartHorizontalBar;

    if (chart) {
        var image = chart.toBase64Image();
        const btnDownload = document.createElement('a');
        btnDownload.href = image;
        btnDownload.download = 'my_file_name.png';

        // Trigger the download
        btnDownload.click();
    } else {
        console.error('Gráfico não encontrado para o ID:', chartId);
    }
}



// Evento para atualizar gráfico quando a série é selecionada
document.getElementById('series').addEventListener('change', function (event) {
  const series = document.getElementById('series');
  const selectedValue = series.options[series.selectedIndex].text;
  // Implemente a lógica para atualizar os gráficos com a série selecionada
  // Você pode filtrar os dados e atualizar os gráficos de acordo com a série selecionada.
  criarGraficoDeBarras({
    labels: DATA_CSV.labels,
    values: DATA_CSV[selectedValue]
  });
  criarGraficoDePizza({
    labels: DATA_CSV.labels,
    values: DATA_CSV[selectedValue]
  });
  criarGraficoDeLinhas({
    labels: DATA_CSV.labels,
    values: DATA_CSV[selectedValue]
  });
});

// Função para empilhar séries em gráficos de barras
function empilharSeries() {
  // Implemente a lógica para empilhar séries nos gráficos de barras
}

// Evento para ativar ou desativar a opção de empilhar séries
document.getElementById('empilharSeries').addEventListener('change', function () {
  empilharSeries();
})
