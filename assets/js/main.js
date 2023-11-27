function exportarGrafico(graficoId) {
    var canvas = document.getElementById(graficoId);
    var nomeDoGrafico = obterNomeDoGrafico(graficoId);
    var dataUrl = canvas.toDataURL('image/png');
  
    // Cria um link temporário para download
    var link = document.createElement('a');
    link.href = dataUrl;
    link.download = nomeDoGrafico + '.png';
    
    // Adiciona o link ao documento e simula o clique para iniciar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function obterNomeDoGrafico(graficoId) {
    var nomes = {
        'grafico-pizza': 'Grafico de Pizza',
        'grafico-linha': 'Grafico de Linha',
        'grafico-barra': 'Grafico de Barra',
        'grafico-horizontal-bar': 'Grafico Horizontal de Barra'
    };

    return nomes[graficoId] || graficoId;
}
  
  function inicializarGraficos() {
    // Gráfico de Pizza
    new Chart(document.getElementById('grafico-pizza').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                label: 'qtd matriculados por regiao',
                data: [20, 30, 35, 45, 40],
                backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF']
            }]
        }
    });
  
    // Gráfico de Linha
    new Chart(document.getElementById('grafico-linha').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                label: 'qtd matriculados por regiao',
                borderColor: '#ff6384',
                data: [10, 25, 15, 30, 20]
            }]
        }
    });
  
    // Gráfico de Barra
    new Chart(document.getElementById('grafico-barra').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                label: 'qtd matriculados por regiao',
                backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
                data: [10, 25, 15, 30, 20]
            }]
        }
    });
  
    // Gráfico de Barra Horizontal
      new Chart(document.getElementById('grafico-horizontal-bar').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                label: 'qtd matriculados por regiao',
                backgroundColor: ['#00BF63', '#FF914D', '#8D723D', '#A6A6A6', '#0047FF'],
                data: [10, 25, 15, 30, 20]
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
  
  // Chame a função de inicialização quando a página carregar
  window.onload = inicializarGraficos;