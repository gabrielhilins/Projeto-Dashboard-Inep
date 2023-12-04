async function iniciar() {
  try {
    // Dados padrão ou outros dados iniciais
    const dadosPadrao = await obterDados(`/dados`);

    // Chamar a função para atualizar os gráficos com os dados iniciais
    atualizarGraficos(dadosPadrao);
  } catch (error) {
    console.error('Erro ao iniciar:', error);
  }
}
// Chame a função de inicialização
iniciar();

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

    // Obter os dados específicos com base nas opções selecionadas
    const dadosEspecificos = await obterDados(`/dados/${filtroSelecionado}/${filtroEspecifico}`);
    // Atualizar os gráficos com os dados específicos
    atualizarGraficos(dadosEspecificos);
  } catch (error) {
    console.error('Erro ao aplicar filtros:', error);
  }
}

function atualizarGraficos(dados) {
  try {
    // Gráfico de Pizza
    new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
      type: 'pie',
      data: {
        labels: dados.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          data: dados.map(item => item.total),
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF']
        }]
      }
    });

    // Gráfico de Linha
    new Chart(document.getElementById('grafico-linha').getContext('2d'), {
      type: 'line',
      data: {
        labels: dados.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          borderColor: '#ff6384',
          data: dados.map(item => item.total)
        }]
      }
    });

    // Gráfico de Barra
    new Chart(document.getElementById('grafico-barra').getContext('2d'), {
      type: 'bar',
      data: {
        labels: dados.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: dados.map(item => item.totalAlunos)
        }]
      }
    });

    // Gráfico de Barra Horizontal
    new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
      type: 'bar',
      data: {
        labels: dados.map(item => item.regiao),
        datasets: [{
          label: 'Quantidade de matriculados por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: dados.map(item => item.totalAlunos)
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
