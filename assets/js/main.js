// Adicione esta linha no início do seu arquivo
let chartInstances = {};

function inserirGraficoTotalBasico(dadosPadrao) {
  // Gráfico de Pizza
  chartInstances['grafico-pizza'] = new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Número de escolas por regiao',
        data: [26086,  80710, 12198, 76461, 29194],
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF']
      }]
    }
  });

  // Gráfico de Linha
  chartInstances['grafico-linha'] = new Chart(document.getElementById('grafico-linha').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Número de escolas por regiao',
        borderColor: '#ff6384',
        data: [26086,  80710, 12198, 76461, 29194]
      }]
    }
  });

  // Gráfico de Barra
  chartInstances['grafico-barra'] = new Chart(document.getElementById('grafico-barra').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Número de escolas por regiao',
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF'],
        data: [26086,  80710, 12198, 76461, 29194]
      }]
    }
  });

  // Gráfico de Barra Horizontal
  chartInstances['grafico-horizontal-bar'] = new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Número de escolas por regiao',
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF'],
        data: [26086,  80710, 12198, 76461, 29194]
      }]
    },
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Vertical Bar Chart'
        }
      }
    }
  });
}

window.onload = function () {
  inserirGraficoTotalBasico();
};

function limparFiltros() {
  // Lógica para limpar os filtros
  document.getElementById('filtro').value = '';
  document.getElementById('etapa_ensinoSelect').value = '';
  document.getElementById('idadeSelect').value = '';
  document.getElementById('cor_raca_etniaSelect').value = '';
  document.getElementById('generoSelect').value = '';

  // Chama a função iniciar para reexibir os gráficos iniciais
  inserirGraficoTotalBasico();
}

function exportarGrafico(id) {
  const chartCanvas = chartInstances[id].canvas;
  const imagem = chartCanvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imagem;
  link.download = 'grafico.png';
  link.click();
}
