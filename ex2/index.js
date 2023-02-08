function mostraHorario() {
  const horaAtual = new Date();
  const hora = horaAtual.getHours();
  const min = horaAtual.getMinutes();
  const sec = horaAtual.getSeconds();
  console.log(`${hora}:${min}:${sec}`);
  //return `${hora}:${min}:${sec}`;
}

const interval = setInterval(() => mostraHorario(), 1000);

setTimeout(() => {
  clearInterval(interval);
}, 7000);
