let chartInstances = {};
const regiao = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];
const basico = [13767582, 4812754, 3642951, 18717083, 6441704];
const inf = [719675, 2381583,  683163, 3867832, 1376511];
const fund = [2915590, 7597217, 2122485, 10250077, 3566859];
const medio = [806098, 2169684, 622571, 3210050, 1058292];
const idade03 = [194447, 899036, 250078, 1709640, 602190];
const idade45 = [488977, 1381125, 398173, 2020605, 714768 ];
const idade610 = [1495119, 3905110, 1163525, 5576156, 1957894];
const idade1114 = [1210750, 3263006, 902086, 4380211, 1508084 ];
const idade1517 = [855840, 2322625, 641681, 3392040, 1092657];
const idade18mais = [567745, 1996680, 287408, 1638539, 552853 ];
const masc = [2447306, 6974408, 1845859, 9443538, 3265785 ];
const fem = [2365448, 6793174, 1797092, 9273545, 3175919];
const yellow = [10907, 52803, 11985, 63864, 18859];
const white = [468179, 1741018, 834238, 8042787, 4040481];
const brown = [578190, 6959663, 1207329, 5687211, 820098];
const black = [86384, 509432, 69205, 755768, 171371];
const ind = [166586, 83674, 50921, 29693, 23241];

function destruirGraficos() {
  for (const chartId in chartInstances) {
    if (chartInstances.hasOwnProperty(chartId)) {
      if (chartInstances[chartId]) {
        chartInstances[chartId].destroy();
      }
    }
  }
}

function inserirGraficoTotalBasico() {
  destruirGraficos();
  // Gráfico de Pizza
  chartInstances['grafico-pizza'] = new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
    type: 'pie',
    data: {
      labels: regiao,
      datasets: [{
        label: `Quantidade de matriculados no Ensino Básico por Região`,
        data: basico,
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF']
      }]
    }
  });

  // Gráfico de Linha
  chartInstances['grafico-linha'] = new Chart(document.getElementById('grafico-linha').getContext('2d'), {
    type: 'line',
    data: {
      labels: regiao,
      datasets: [{
        label: 'Quantidade de matriculados no Ensino Básico por Região',
        borderColor: '#ff6384',
        data: basico
      }]
    }
  });

  // Gráfico de Barra
  chartInstances['grafico-barra'] = new Chart(document.getElementById('grafico-barra').getContext('2d'), {
    type: 'bar',
    data: {
      labels: regiao,
      datasets: [{
        label: 'Quantidade de matriculados por Região',
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF'],
        data: basico
      }]
    }
  });

  // Gráfico de Barra Horizontal
  chartInstances['grafico-horizontal-bar'] = new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
    type: 'bar',
    data: {
      labels: regiao,
      datasets: [{
        label: 'Quantidade de matriculados por Região',
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF'],
        data: basico
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
  if (filtroSelecionado === '') {
    return;
  } else if (filtroSelecionado in ['etapa_ensino', 'idade', 'cor_raca_etnia', 'genero']) {
    switch (filtroSelecionado) {
      case 'etapa_ensino':
       filtroEspecifico = document.getElementById('etapa_ensinoSelect').value;
       gerarGrafico('Matrículas por Etapa de Ensino', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-pizza', 'pie');
       gerarGrafico('Matrículas por Etapa de Ensino', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-linha', 'line');
       gerarGrafico('Matrículas por Etapa de Ensino', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-barra', 'bar');
       gerarGrafico('Matrículas por Etapa de Ensino', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-horizontal-bar', 'bar');

       break;
      case 'idade':
       filtroEspecifico = document.getElementById('idadeSelect').value;
       gerarGrafico('Matrículas por Idade', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-pizza', 'pie');
       gerarGrafico('Matrículas por Idade', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-linha', 'line');
       gerarGrafico('Matrículas por Idade', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-barra', 'bar');
       gerarGrafico('Matrículas por Idade', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-horizontal-bar', 'bar');

       break;
      case 'cor_raca_etnia':
       filtroEspecifico = document.getElementById('cor_raca_etniaSelect').value;
       gerarGrafico('Matrículas por Cor/Raça/Etnia', obterDadosParaCorRacaEtnia(filtroEspecifico), 'grafico-pizza', 'pie');
       gerarGrafico('Matrículas por Cor/Raça/Etnia', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-linha', 'line');
       gerarGrafico('Matrículas por Cor/Raça/Etnia', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-barra', 'bar');
       gerarGrafico('Matrículas por Cor/Raça/Etnia', obterDadosParaEtapaEnsino(filtroEspecifico), 'grafico-horizontal-bar', 'bar');

       break;
      case 'genero':
       filtroEspecifico = document.getElementById('generoSelect').value;
       gerarGrafico('Matrículas por Gênero', obterDadosParaGenero(filtroEspecifico), 'grafico-pizza', 'pie');
       gerarGrafico('Matrículas por Gênero', obterDadosParaGenero(filtroEspecifico), 'grafico-linha', 'line');
       gerarGrafico('Matrículas por Gênero', obterDadosParaGenero(filtroEspecifico), 'grafico-barra', 'bar');
       gerarGrafico('Matrículas por Gênero', obterDadosParaGenero(filtroEspecifico), 'grafico-horizontal-bar', 'bar');
       break;
      default:
       break;
     }
  }
 }
 
 function gerarGrafico(label, data, chartId, chartType) {
  // Destrói o gráfico existente
  destruirGraficos();

  // Cria o novo gráfico
  chartInstances[chartId] = new Chart(document.getElementById(chartId).getContext('2d'), {
    type: chartType,
    data: {
      labels: regiao,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: ['#FF914D', '#00BF63', '#8D723D', '#A6A6A6', '#0047FF']
      }]
    },
    options: {
      indexAxis: chartType === 'bar' ? 'y' : undefined, // Ajusta a orientação do eixo para barras horizontais
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

 
 function obterDadosParaEtapaEnsino(etapaEnsino) {

  switch (etapaEnsino) {
   case 'Infantil':
    return inf;
   case 'Fundamental':
    return fund;
   case 'Medio':
    return medio;
   default:
    return 0;
  }
 }
 
 function obterDadosParaIdade(idade) {
  
  switch (idade) {
   case '03':
    return idade03;
   case '45':
    return idade45;
   case '610':
    return idade610;
   case '1114':
    return idade1114;
   case '1517':
    return idade1517;
   case '18mais':
    return idade18mais;
   default:
    return 0;
  }
 }
 
 function obterDadosParaCorRacaEtnia(corRacaEtnia) {
 
  switch (corRacaEtnia) {
   case 'Amarelo':
    return yellow;
    case 'Branco':
    return white;
  case 'Indigena':
   return ind;
  case 'Pardo':
   return brown;
  case 'Preto':
   return black;
  default:
   return 0;
 }
}

function obterDadosParaGenero(genero) {
 
 switch (genero) {
  case 'Masculino':
   return masc;
  case 'Feminino':
   return fem;
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
