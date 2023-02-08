function sleep(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valor);
    }, 3000);
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('Finalizado!');
    });
}

sleep(28);
sleep(19);
