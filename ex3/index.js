function aprovarDadosCadastrais(cliente) {
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) resolve(true);
    else reject(false);
  });
}

function aprovarValorSolicitado(cliente, valor) {
  return new Promise((resolve, reject) => {
    if (cliente.margem >= parseFloat(valor)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

const cliente = {
  cpf: 11111111111,
  nome: 'Calleri',
  margem: 1000.0,
};

const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

// continue com o tratamento dos resultados de ambas as promises...

Promise.all([aprovacaoCadastro, aprovacaoValor])
  .then((result) => {
    console.log(`APROVADO`, result);
  })
  .catch((err) => {
    console.log(`REPROVADO`, err);
  })
  .finally(() => {
    console.log(`Fim do processamento`);
  });
