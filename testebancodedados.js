const pgp = require('pg-promise')();

// Configurações de conexão com o banco de dados
const dbConfig = {
  host: 'isabelle.db.elephantsql.com',
  port: '5432',
  database: 'cncgklju',
  user: 'cncgklju',
  password: 'VztvmF2Cy4KC6fFhgnLTxHiSQCGSSvh6',
  max: 100
};

// Tenta conectar-se ao banco de dados
const db = pgp(dbConfig);

db.connect()
  .then(obj => {
    // A conexão foi bem-sucedida
    console.log('Conexão bem-sucedida com o banco de dados');
    obj.done(); // Liberar o objeto de conexão
  })
  .catch(error => {
    // Houve um erro na conexão
    console.error('Erro ao conectar-se ao banco de dados:', error);
  });
