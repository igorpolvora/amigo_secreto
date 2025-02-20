// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  // Validar se o campo está vazio
  if (nome === '') {
      alert('Por favor, digite um nome válido.');
      return;
  }

  // Adicionar o nome à lista
  const listaAmigos = document.getElementById('listaAmigos');
  const novoItem = document.createElement('li');
  novoItem.textContent = nome;
  listaAmigos.appendChild(novoItem);

  // Limpar o campo de entrada
  input.value = '';
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  const listaAmigos = document.getElementById('listaAmigos');
  const itens = listaAmigos.getElementsByTagName('li');

  // Verificar se há nomes na lista
  if (itens.length === 0) {
      alert('Adicione pelo menos um nome antes de sortear.');
      return;
  }

  // Sortear um nome aleatório
  const indiceSorteado = Math.floor(Math.random() * itens.length);
  const amigoSorteado = itens[indiceSorteado].textContent;

  // Exibir o resultado do sorteio
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`;
}