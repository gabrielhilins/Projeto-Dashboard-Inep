const pgp = require('pg-promise')();

const dbalunos = pgp({
  host: 'isabelle.db.elephantsql.com',
  port: '5432',
  database: 'cncgklju',
  user: 'cncgklju',
  password: 'VztvmF2Cy4KC6fFhgnLTxHiSQCGSSvh6',
  max: 20 // Número máximo de conexões no pool
});

async function obterTotaisBasico() {
  try {
    const totais = await Promise.all([
      // Total de matriculados no Ensino básico (Infantil + Fundamental + Médio)
      dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Sul'])
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por raça e região:', error);
    throw error;
  }
}

async function obterTotaisPorEscolaridadeERegiao() {
  try {
    const totais = await Promise.all([
      // Infantil
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // Fundamental
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // Médio
      dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por raça e região:', error);
    throw error;
  }
}

async function obterTotaisPorIdadeERegiao() {
  try {
    const totais = await Promise.all([
      // 0-3
      dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // 4-5
      dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // 6-10
      dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // 11-14
      dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      //15-17
      dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Sul']),
      
      // 18-mais
      dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Sul'])
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por raça e região:', error);
    throw error;
  }
}

async function obterTotaisPorGeneroERegiao() {
  try {
    const totais = await Promise.all([
      // 
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // Fundamental
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por raça e região:', error);
    throw error;
  }
}

// Função para obter totais de alunos por raça e região
async function obterTotaisPorRacaERegiao() {
  try {
    const totais = await Promise.all([
      // Preta
      dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // Amarela
      dbalunos.one('SELECT SUM(QT_MAT_BAS_AMARELA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_AMARELA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_AMARELA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_AMARELA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_AMARELA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // Branca
      dbalunos.one('SELECT SUM(QT_MAT_BAS_BRANCA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_BRANCA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_BRANCA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_BRANCA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_BRANCA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // Indígena
      dbalunos.one('SELECT SUM(QT_MAT_BAS_INDIGENA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_INDIGENA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_INDIGENA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_INDIGENA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_INDIGENA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul']),

      // Parda
      dbalunos.one('SELECT SUM(QT_MAT_BAS_PARDA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_PARDA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_PARDA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_PARDA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste']),
      dbalunos.one('SELECT SUM(QT_MAT_BAS_PARDA) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por raça e região:', error);
    throw error;
  }
}

// Agora você pode exportar a função para ser usada em outros módulos
module.exports = {
  dbalunos,
  obterTotaisBasico,
  obterTotaisPorEscolaridadeERegiao,
  obterTotaisPorGeneroERegiao,
  obterTotaisPorRacaERegiao,
  obterTotaisPorIdadeERegiao
};
