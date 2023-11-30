const dbalunos = require('./dbalunos');

async function testarObterTotaisBasico() {
  try {
    // Chame a função para obter totais básicos
    const totais = await dbalunos.obterTotaisBasico();

    // Imprima os totais no console
    console.log('Totais básicos:', totais);
  } catch (error) {
    console.error('Erro ao testar obterTotaisBasico:', error);
  }
}

// Chame a função de teste
testarObterTotaisBasico();