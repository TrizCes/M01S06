const obterUsuarios = async (qtd = 4) => {
  const url = `https://randomuser.me/api/?results=${qtd}`;
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener('load', async () => {
  const data = await obterUsuarios(10);

  const lista = document.getElementById('lista');

  data.results.forEach((usuario) => {
    const item = document.createElement('li');
    const nome = document.createElement('h5');
    const email = document.createElement('p');
    const endereco = document.createElement('p');
    const imagem = document.createElement('img');

    const { street, city, state, country } = usuario.location;
    const { title, first, last } = usuario.name;
    const { name, number } = street;

    nome.innerText = `${title} ${first} ${last}`;
    email.innerText = usuario.email;
    endereco.innerText = `${name} ${number} ${city} ${state} ${country}`;
    imagem.src = usuario.picture.large;
    imagem.alt = 'Imagem do usuario';

    item.appendChild(nome);
    item.appendChild(email);
    item.appendChild(endereco);
    item.appendChild(imagem);

    lista.appendChild(item);
  });
});
