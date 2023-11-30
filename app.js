const express = require('express');
const app = express();
const port = 5432;
const bodyParser = require('body-parser');
const path = require('path');
const dbalunos = require('./dbalunos');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter dados do total de alunos por região
app.get('/aluno.html/dados/total-alunos', async (req, res) => {
  try {
    const dadosTotalAlunos = await dbalunos.obterTotaisBasico();
    res.json(dadosTotalAlunos);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do total de alunos' });
  }
  
});

// Rota para obter dados do banco de dados
app.get('/dados', async (req, res) => {
  try {
    // Modifique esta consulta SQL de acordo com a estrutura do seu banco de dados
    const dados = await dbalunos.obterTotaisPorEscolaridadeERegiao();
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

app.get('/dados/idade', async (req, res) => {
  try {
    // Modifique esta consulta SQL de acordo com a estrutura do seu banco de dados
    const dadosidade = await dbalunos.obterTotaisPorIdadeERegiao();
    res.json(dadosidade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

app.get('/dados/genero', async (req, res) => {
  try {
    // Modifique esta consulta SQL de acordo com a estrutura do seu banco de dados
    const dadosgenero = await dbalunos.bterTotaisPorGeneroERegiao();
    res.json(dadosgenero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

app.get('/dados/raca', async (req, res) => {
  try {
    // Modifique esta consulta SQL de acordo com a estrutura do seu banco de dados
    const dadosraca = await dbalunos.obterTotaisPorRacaERegiao();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota padrão que serve o seu arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'aluno.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
