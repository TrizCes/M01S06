async function obterClienteNoBancoDeDados(idCliente) {
  const cliente = await new Promise((resolve) => {
    setTimeout(() => resolve({ nome: 'bruce wayne', id: idCliente }), 2000);
  });
  return cliente;
}

async function processar() {
  const processo = await obterClienteNoBancoDeDados(7);
  console.log(processo);
}

processar();
