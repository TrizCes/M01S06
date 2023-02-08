const fakeTime = () => parseInt(Math.random() * 10000); //cria "tempo" para enviar para tempo de resposta

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

// ... continue daqui ....

Promise.race([retornoEmpresa1, retornoEmpresa2])
  .then((res) => {
    console.log('Empresa vencedora:', res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Fim do sistema');
  });
