const pgp = require('pg-promise')();

const dbalunos = pgp({
  host: 'isabelle.db.elephantsql.com',
  port: '5432',
  database: 'cncgklju',
  user: 'cncgklju',
  password: 'VztvmF2Cy4KC6fFhgnLTxHiSQCGSSvh6',
  max: 200 // Número máximo de conexões no pool
});

async function obterTotaisBasico() {
  try {
    const totais = await Promise.all([
      // Total de matriculados no Ensino básico (Infantil + Fundamental + Médio)
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas) AS total FROM "restante" WHERE no_regiao = $1', ['Sul'])).total }
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos do Ensino Basico por região:', error);
    throw error;
  }
}

async function obterTotaisInfantil() {
  try {
    const totais = await Promise.all([
      // Infantil
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_inf) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);
    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos do Ensino Infantil:', error);
    throw error;
  }
}

async function obterTotaisFundamental() {
  try {
    const totais = await Promise.all([
      // Fundamental
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_fund) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);
    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por Ensino Fundamental:', error);
    throw error;
  }
}

async function obterTotaisMedio() {
  try {
    const totais = await Promise.all([
      // Médio
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_med) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);
    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por Ensino Médio:', error);
    throw error;
  }
}

async function obterTotais03() {
  try {
    const totais = await Promise.all([
      // 0-3
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_0_3) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por raça e região:', error);
    throw error;
  }
}

async function obterTotais45() {
  try {
    const totais = await Promise.all([
      // 4-5
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_4_5) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por 4-5 anos:', error);
    throw error;
  }
}

async function obterTotais610() {
  try {
    const totais = await Promise.all([
      // 6-10
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_6_10) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por 6-10 anos:', error);
    throw error;
  }
}

async function obterTotais1114() {
  try {
    const totais = await Promise.all([
      // 11-14
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_11_14) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por 11-14 anos:', error);
    throw error;
  }
}

async function obterTotais1517() {
  try {
    const totais = await Promise.all([
      // 15-17
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_15_17) AS total FROM "restante" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por 15-17 anos:', error);
    throw error;
  }
}

async function obterTotais18mais() {
  try {
    const totais = await Promise.all([
      // 18+
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_18_mais) AS total FROM "restante" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos 18+:', error);
    throw error;
  }
}

async function obterTotaisMasculino() {
  try {
    const totais = await Promise.all([
      // Masculino
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_masc) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_masc) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_masc) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_masc) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_masc) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por genero masculino:', error);
    throw error;
  }
}

async function obterTotaisFeminino() {
  try {
    const totais = await Promise.all([
      // Feminino
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_fem) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_fem) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_fem) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_fem) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_fem) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por genero feminino:', error);
    throw error;
  }
}

// Função para obter totais de alunos por raça e região
async function obterTotaisPreto() {
  try {
    const totais = await Promise.all([
      // Preta
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_preta) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por Preto:', error);
    throw error;
  }
}

async function obterTotaisBranco() {
  try {
    const totais = await Promise.all([
      // Branca
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_branca) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_branca) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_branca) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_branca) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_branca) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por Branco:', error);
    throw error;
  }
}

async function obterTotaisAmarelo() {
  try {
    const totais = await Promise.all([
      // Amarela
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_amarela) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_amarela) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_amarela) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_amarela) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_amarela) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por Amarelo:', error);
    throw error;
  }
}

async function obterTotaisPardo() {
  try {
    const totais = await Promise.all([
      // Parda
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_parda) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_parda) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_parda) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_parda) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_parda) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por Pardo:', error);
    throw error;
  }
}

async function obterTotaisIndigena() {
  try {
    const totais = await Promise.all([
      // Indigena
      { regiao: 'Nordeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_indigena) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Nordeste'])).total },
      { regiao: 'Norte', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_indigena) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Norte'])).total },
      { regiao: 'Centro-Oeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_indigena) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Centro-Oeste'])).total },
      { regiao: 'Sudeste', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_indigena) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sudeste'])).total },
      { regiao: 'Sul', total: (await dbalunos.one('SELECT SUM(qt_mat_bas_indigena) AS total FROM "bd alunos" WHERE no_regiao = $1', ['Sul'])).total },
    ]);

    return totais;
  } catch (error) {
    console.error('Erro ao obter totais de alunos por Indígena:', error);
    throw error;
  }
}

// Exportação das funções
module.exports = {
  dbalunos,
  obterTotaisBasico,
  obterTotaisInfantil,
  obterTotaisFundamental,
  obterTotaisMedio,
  obterTotais03,
  obterTotais45,
  obterTotais610,
  obterTotais1114,
  obterTotais1517,
  obterTotais18mais,
  obterTotaisMasculino,
  obterTotaisFeminino,
  obterTotaisPreto,
  obterTotaisBranco,
  obterTotaisAmarelo,
  obterTotaisPardo,
  obterTotaisIndigena
};
