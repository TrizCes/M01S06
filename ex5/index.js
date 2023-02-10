async function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve) => {
    resolve({ nome: 'bruce wayne', id: idCliente });
  });
}

async function processar() {
  const processo = await obterClienteNoBancoDeDados(7);
  console.log(processo);
}

processar();
