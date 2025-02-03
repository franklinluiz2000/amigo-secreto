let amigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const nomeAmigo = document.getElementById('amigo').value;

    // Validar a entrada
    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualizar a lista de amigos exibida na página
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Obter o elemento da lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpar a lista existente
    listaAmigos.innerHTML = '';

    // Percorrer o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento de lista
        const li = document.createElement('li');
        li.textContent = amigos[i];

        // Adicionar o elemento à lista
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Meu amigo secreto é: ${amigoSorteado}</li>`;
}

