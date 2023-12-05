async function iniciar() {
  try {
    const dadosPadrao = await obterTotaisBasico(`/dados`);
    inserirGraficoTotalBasico(dadosPadrao);
  } catch (error) {
    console.error('Erro ao iniciar:', error);
  }
}
// Chame a função de inicialização
iniciar();

async function inserirGraficoTotalBasico(dadosPadrao) {
  try {
    // Gráfico de Pizza
    new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
      type: 'pie',
      data: {
        labels: dadosPadrao.map(item => item.regiao),
        datasets: [{
          label: `Quantidade de matriculados ${filtroEspecifico} por Região`,
          data: dadosPadrao.map(item => Number(item.total)),
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF']
        }]
      }
    });

    // Gráfico de Linha
    new Chart(document.getElementById('grafico-linha').getContext('2d'), {
      type: 'line',
      data: {
        labels: dadosPadrao.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          borderColor: '#ff6384',
          data: dadosPadrao.map(item => Number(item.total))
        }]
      }
    });

    // Gráfico de Barra
    new Chart(document.getElementById('grafico-barra').getContext('2d'), {
      type: 'bar',
      data: {
        labels: dadosPadrao.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: dadosPadrao.map(item => Number(item.total))
        }]
      }
    });

    // Gráfico de Barra Horizontal
    new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
      type: 'bar',
      data: {
        labels: dadosPadrao.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: dadosPadrao.map(item => Number(item.total))
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
  } catch (error) {
    console.error('Erro ao atualizar os gráficos:', error);
  }
}


async function aplicarFiltros() {
  try {
    const filtroSelecionado = document.getElementById('filtro').value;
    let filtroEspecifico;

    switch (filtroSelecionado) {
      case 'etapa_ensino':
        filtroEspecifico = document.getElementById('etapa_ensinoSelect').value;
        break;
      case 'idade':
        filtroEspecifico = document.getElementById('idadeSelect').value;
        break;
      case 'cor_raca_etnia':
        filtroEspecifico = document.getElementById('cor_raca_etniaSelect').value;
      case 'genero':
        filtroEspecifico = document.getElementById('generoSelect').value;
      default:
        break;
    }
    const nomeFuncao =  `obterTotais${filtroEspecifico}`;
    const dadosEspecificos = await nomeFuncao(`/dados/${filtroSelecionado}/${filtroEspecifico}`);
    // Atualizar os gráficos com os dados específicos
    atualizarGraficos(dadosEspecificos);
  } catch (error) {
    console.error('Erro ao aplicar filtros:', error);
  }
}

function atualizarGraficos(dadosEspecificos) {
  try {
    // Gráfico de Pizza
    new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
      type: 'pie',
      data: {
        labels: dadosEspecificos.map(item => item.regiao),
        datasets: [{
          label: `Quantidade de matriculados ${filtroEspecifico} por Região`,
          data: dadosEspecificos.map(item => Number(item.total)),
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF']
        }]
      }
    });

    // Gráfico de Linha
    new Chart(document.getElementById('grafico-linha').getContext('2d'), {
      type: 'line',
      data: {
        labels: dadosEspecificos.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          borderColor: '#ff6384',
          data: dadosEspecificos.map(item => Number(item.total))
        }]
      }
    });

    // Gráfico de Barra
    new Chart(document.getElementById('grafico-barra').getContext('2d'), {
      type: 'bar',
      data: {
        labels: dadosEspecificos.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: dadosEspecificos.map(item => Number(item.total))
        }]
      }
    });

    // Gráfico de Barra Horizontal
    new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
      type: 'bar',
      data: {
        labels: dadosEspecificos.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: dadosEspecificos.map(item => Number(item.total))
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
  } catch (error) {
    console.error('Erro ao atualizar os gráficos:', error);
  }
}
