// Adicione esta linha no início do seu arquivo
let chartInstances = {};

function inserirGraficoTotalBasico(dadosPadrao) {
  // Gráfico de Pizza
  chartInstances['grafico-pizza'] = new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: `Quantidade de matriculados no Ensino Básico por Região`,
        data: [13767582, 4812754, 3642951, 18717083, 6441704],
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
        label: 'Quantidade de matriculados no Ensino Básico por Região',
        borderColor: '#ff6384',
        data: [13767582, 4812754, 3642951, 18717083, 6441704]
      }]
    }
  });

  // Gráfico de Barra
  chartInstances['grafico-barra'] = new Chart(document.getElementById('grafico-barra').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Quantidade de matriculados por Região',
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF'],
        data: [13767582, 4812754, 3642951, 18717083, 6441704]
      }]
    }
  });

  // Gráfico de Barra Horizontal
  chartInstances['grafico-horizontal-bar'] = new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Quantidade de matriculados por Região',
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF'],
        data: [13767582, 4812754, 3642951, 18717083, 6441704]
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

function aplicarFiltros() {
  const filtroSelecionado = document.getElementById('filtro').value;
  let filtroEspecifico;

  switch (filtroSelecionado) {
    case 'etapa_ensino':
      filtroEspecifico = document.getElementById('etapa_ensinoSelect').value;
      gerarGrafico('grafico-pizza', 'Etapa de Ensino', obterDadosParaEtapaEnsino(filtroEspecifico));
      break;
    case 'idade':
      filtroEspecifico = document.getElementById('idadeSelect').value;
      gerarGrafico('grafico-linha', 'Idade', obterDadosParaIdade(filtroEspecifico));
      break;
    case 'cor_raca_etnia':
      filtroEspecifico = document.getElementById('cor_raca_etniaSelect').value;
      gerarGrafico('grafico-barra', 'Cor/Raça/Etnia', obterDadosParaCorRacaEtnia(filtroEspecifico));
      break;
    case 'genero':
      filtroEspecifico = document.getElementById('generoSelect').value;
      gerarGrafico('grafico-horizontal-bar', 'Gênero', obterDadosParaGenero(filtroEspecifico));
      break;
    default:
      break;
  }
}

function gerarGrafico(id, label, data) {
  const ctx = document.getElementById(id).getContext('2d');
  chartInstances[id] = new Chart(ctx, {
    type: 'pie', // Altere o tipo de gráfico conforme necessário (pie, line, bar, horizontalBar, etc.)
    data: {
      labels: [label],
      datasets: [{
        label: label,
        data: [data],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
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

function obterDadosParaEtapaEnsino(etapaEnsino) {
  switch (etapaEnsino) {
    case 'Infantil':
      return 30;
    case 'Fundamental':
      return 50;
    case 'Medio':
      return 20;
    default:
      return 0;
  }
}

function obterDadosParaIdade(idade) {
  // Suponha que você obtenha esses dados de uma fonte externa
  // Aqui estamos usando valores fictícios apenas para ilustrar
  switch (idade) {
    case '03':
      return 10;
    case '45':
      return 20;
    case '610':
      return 30;
    case '1114':
      return 15;
    case '1517':
      return 25;
    case '18mais':
      return 40;
    default:
      return 0;
  }
}

function obterDadosParaCorRacaEtnia(corRacaEtnia) {
  switch (corRacaEtnia) {
    case 'Amarelo':
      return 5;
    case 'Branco':
      return 15;
    case 'Indigena':
      return 2;
    case 'Pardo':
      return 20;
    case 'Preto':
      return 8;
    default:
      return 0;
  }
}

function obterDadosParaGenero(genero) {
  switch (genero) {
    case 'Masculino':
      return 40;
    case 'Feminino':
      return 60;
    default:
      return 0;
  }
}

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
