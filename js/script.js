let cartItems = []; // Array para armazenar os itens do carrinho
let currentIndex = 1; // Índice atual usado para identificar os itens no carrinho
let quantJogo = 1; // Variável que parece não ser utilizada nesta parte do código

function addToCart(event) {
    event.stopPropagation();

    let button = event.target; // Botão que acionou o evento
    let card = button.closest('.card'); // Encontra o elemento "card" mais próximo do botão clicado
    let itemName = card.querySelector('.card-title').innerText; // Obtém o nome do item a partir do elemento com a classe "card-title" dentro do card
    let itemImage = card.querySelector('.card-img-top').getAttribute('src'); // Obtém o atributo "src" da imagem do item dentro do card
    let itemDescription = card.querySelector('.truncate-3l').innerText; // Obtém a descrição do item a partir do elemento com a classe "truncate-3l" dentro do card
    let itemPrice = parseFloat(card.querySelector('.card-header').innerText.replace('R$', '').trim()); // Obtém o preço do item a partir do elemento com a classe "card-header" dentro do card, removendo o símbolo "R$" e convertendo para um número de ponto flutuante

    let existingItemIndex = cartItems.findIndex(item => item.name === itemName); // Verifica se o item já existe no carrinho, procurando pelo índice do item na matriz cartItems com base no nome do item
    if (existingItemIndex !== -1) {
        // Item já existe no carrinho
        if (cartItems[existingItemIndex].inputValue < 10) {
            cartItems[existingItemIndex].inputValue++; // Incrementa o valor de inputValue do item existente no carrinho
            updateCartDropdown(); // Atualiza o dropdown do carrinho (função não fornecida no código)
        } else {
            // Você pode exibir uma mensagem de aviso ou tomar alguma ação específica quando atingir o limite
            console.log('Limite de quantidade atingido para o produto:', itemName); // Exibe uma mensagem de aviso no console quando o limite de quantidade do item é atingido
        }
    } else {
        let item = {
            id: cartItems.length,
            name: itemName,
            image: itemImage,
            description: itemDescription,
            price: itemPrice,
            inputValue: 1
        };

        currentIndex++;
        cartItems.push(item); // Adiciona o item à matriz cartItems
        console.log('Item adicionado ao carrinho:', item); // Exibe uma mensagem no console informando que o item foi adicionado ao carrinho
        updateCartDropdown(); // Atualiza o dropdown do carrinho (função não fornecida no código)
    }
}
