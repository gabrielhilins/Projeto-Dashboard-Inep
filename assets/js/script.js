document.addEventListener('DOMContentLoaded', async () => {
  // Inicializa os gráficos quando a página carrega
  inicializarGraficos();

  // Obtém os dados do servidor ao carregar a página
  try {
    // Obtém dados padrão ao carregar a página
    const responsePadrao = await fetch('/dados/total-alunos');
    const dadosPadrao = await responsePadrao.json();
    atualizarGraficos(dadosPadrao);

    // Obtém os dados do servidor para os filtros
    const response = await fetch('/dados');
    const dados = await response.json();

    // Atualiza os gráficos com os dados do servidor
    atualizarGraficos(dados);

    // Adiciona evento para aplicar filtros quando houver mudança no seletor
    const filtroPrincipal = document.getElementById('filtro');
    filtroPrincipal.addEventListener('change', aplicarFiltros);

  } catch (error) {
    console.error('Erro ao inicializar a página:', error);
  }
});

// Função para inicializar os gráficos
async function inicializarGraficos() {
  try {
    // Gráfico de Pizza
    const pizzaResponse = await fetch('./dados/total-alunos');
    const pizzaDados = await pizzaResponse.json();

    new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
      type: 'pie',
      data: {
        labels: pizzaDados.map(item => item.regiao),
        datasets: [{
          label: 'Total de matriculados no Ensino Básico por Região',
          data: pizzaDados.map(item => item.totalAlunos),
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF']
        }]
      }
    });

    // Gráfico de Linha
    const linhaResponse = await fetch('/dados/total-alunos');
    const linhaDados = await linhaResponse.json();

    new Chart(document.getElementById('grafico-linha').getContext('2d'), {
      type: 'line',
      data: {
        labels: linhaDados.map(item => item.regiao),
        datasets: [{
          label: 'Total de matriculados no Ensino Básico por Região',
          borderColor: '#ff6384',
          data: linhaDados.map(item => item.totalAlunos)
        }]
      }
    });

    // Gráfico de Barra
    const barraResponse = await fetch('/dados/total-alunos');
    const barraDados = await barraResponse.json();

    new Chart(document.getElementById('grafico-barra').getContext('2d'), {
      type: 'bar',
      data: {
        labels: barraDados.map(item => item.regiao),
        datasets: [{
          label: 'Total de matriculados no Ensino Básico por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: barraDados.map(item => item.totalAlunos)
        }]
      }
    });

    // Gráfico de Barra Horizontal
    const barraHorizontalResponse = await fetch('/dados/total-alunos');
    const barraHorizontalDados = await barraHorizontalResponse.json();

    new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
      type: 'bar',
      data: {
        labels: barraHorizontalDados.map(item => item.regiao),
        datasets: [{
          label: 'Total de matriculados no Ensino Básico por Região',
          backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
          data: barraHorizontalDados.map(item => item.totalAlunos)
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
    console.error('Erro ao inicializar os gráficos:', error);
  }
}
window.onload = inicializarGraficos;


// Função para atualizar os gráficos com dados do servidor
function atualizarGraficos(dados) {
  // Atualizar o gráfico de Pizza com novos dados
  atualizarGraficoPizza(dados);

  // Atualizar o gráfico de Linha com novos dados
  atualizarGraficoLinha(dados);

  // Atualizar o gráfico de Barra com novos dados
  atualizarGraficoBarra(dados);

  // Atualizar o gráfico de Barra Horizontal com novos dados
  atualizarGraficoBarraHorizontal(dados);
}

// Função para atualizar o gráfico de Pizza
function atualizarGraficoPizza(dados) {
  // (seu código existente para atualizar o gráfico de pizza com os novos dados)
}

// Função para atualizar o gráfico de Linha
function atualizarGraficoLinha(dados) {
  // (seu código existente para atualizar o gráfico de linha com os novos dados)
}

// Função para atualizar o gráfico de Barra
function atualizarGraficoBarra(dados) {
  // (seu código existente para atualizar o gráfico de barra com os novos dados)
}

// Função para atualizar o gráfico de Barra Horizontal
function atualizarGraficoBarraHorizontal(dados) {
  // (seu código existente para atualizar o gráfico de barra horizontal com os novos dados)
}

// Função para aplicar filtros aos gráficos
async function aplicarFiltros() {
  const filtroPrincipal = document.getElementById('filtro');
  const filtrosEspecificos = document.getElementById('filtros-especificos');

  // Lógica para aplicar filtros conforme necessário
  // ...

  try {
    // Obtém os dados filtrados do servidor
    const filtroSelecionado = filtroPrincipal.value;
    const responseFiltro = await fetch(`/dados/${filtroSelecionado}`);
    const dadosFiltrados = await responseFiltro.json();

    // Atualiza os gráficos com os dados filtrados
    atualizarGraficos(dadosFiltrados);
  } catch (error) {
    console.error('Erro ao aplicar filtros:', error);
  }
}
