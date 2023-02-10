function mostraHorario() {
  const horaAtual = new Date();
  const hora = horaAtual.getHours();
  const min = horaAtual.getMinutes();
  const sec = horaAtual.getSeconds();
  console.log(`${hora}:${min}:${sec}`);

  //return `${hora}:${min}:${sec}`;
  //OBS: poderia usar o horaAtual.toLocaleDateString('pt-BR'); > já passaria formato HH:MM:SS
}

const interval = setInterval(() => mostraHorario(), 1000);

//PARA PARAR A REPETIÇÃO:
setTimeout(() => {
  clearInterval(interval);
}, 7000);
