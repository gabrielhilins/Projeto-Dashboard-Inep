const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const path = require('path');
const dbalunos = require('./dbalunos');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter dados do total de alunos por região
app.get('/dados', async (req, res) => {
  try {
    const dadosTotalAlunos = await dbalunos.obterTotaisBasico();
    res.json(dadosTotalAlunos);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do total de alunos' });
  }
  
});

// Rota para obter dados infantil do banco de dados
app.get('/dados/etapa_ensino/Infantil', async (req, res) => {
  try {
    // Modifique esta consulta SQL de acordo com a estrutura do seu banco de dados
    const dados = await dbalunos.obterTotaisInfantil();
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados fundamental do banco de dados
app.get('/dados/etapa_ensino/Fundamental', async (req, res) => {
  try {
    const dadosidade = await dbalunos.obterTotaisFundamental();
    res.json(dadosidade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados medio do banco de dados
app.get('/dados/etapa_ensino/Medio', async (req, res) => {
  try {
    const dadosgenero = await dbalunos.obterTotaisMedio();
    res.json(dadosgenero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados 0-3 anos do banco de dados
app.get('/dados/idade/03', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisIdade03();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados 4-5 anos do banco de dados
app.get('/dados/idade/45', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisIdade45();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados 6-10 anos do banco de dados
app.get('/dados/idade/610', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisIdade610();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados 11-14 anos do banco de dados
app.get('/dados/idade/1114', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisIdade1114();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados 15-17 anos do banco de dados
app.get('/dados/idade/1517', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisIdade1517();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados 18+ anos do banco de dados
app.get('/dados/idade/18mais', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisIdade18Mais();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados masc do banco de dados
app.get('/dados/genero/Masculino', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisMasc();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados fem do banco de dados
app.get('/dados/genero/Feminino', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisFem();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados preto do banco de dados
app.get('/dados/cor_raca_etnia/Preto', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisPreto();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados branco do banco de dados
app.get('/dados/cor_raca_etnia/Branco', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisBranco();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados amarelo do banco de dados
app.get('/dados/cor_raca_etnia/Amarelo', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisAmarelo();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados pardo do banco de dados
app.get('/dados/cor_raca_etnia/Pardo', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisPardo();
    res.json(dadosraca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
  }
});

// Rota para obter dados indigena do banco de dados
app.get('/dados/cor_raca_etnia/Indigena', async (req, res) => {
  try {
    const dadosraca = await dbalunos.obterTotaisIndigena();
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

app.emit('servidorPronto');
