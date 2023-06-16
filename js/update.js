function removeCartItem(event, id) {
    event.stopPropagation(); // Interrompe a propagação do evento

    cartItems.forEach((item, index) => {
        if (item.id === id) {
            cartItems.splice(index, 1); // Remove o item do carrinho usando o método splice

            cartItems.forEach((item, newIndex) => {
                item.id = newIndex; // Atualiza os índices dos itens restantes no carrinho
            });
        }
    });

    // Atualize a exibição do carrinho
    updateCartDropdown();
}

function updateCartDropdown() {
    let cartItemsList = document.querySelector('#cartItemsList');
    cartItemsList.innerHTML = ''; // Limpa a lista de itens do carrinho no HTML

    let total = 0;
    cartItems.forEach(item => {
        let cartItemElement = document.createElement('li'); // Cria um elemento <li> para o item do carrinho
        cartItemElement.classList.add('list-group-item');
        cartItemElement.classList.add('py-3');
        cartItemElement.setAttribute('data-id', item.id);
        cartItemElement.innerHTML = `
        <div class="row g-3">
            <div class="gameCarrinho" data-id="${item.id}">
                <div class="row">
                    <div class="col-4">
                        <a href="">
                            <img src="${item.image}" alt="${item.name}" class="img-thumbnail" style="max-width: 80px; height: auto;">
                        </a>
                    </div>
                    <div class="col-8">
                        <div class="text-left align-self-center">
                            <h4><b><a href="" class="text-decoration-none" style="font-size: 20px;">${item.name}</a></b></h4>
                            <h4><small style="font-size: 16px;">${item.description}</small></h4>
                        <div class="text-right">
                            <span class="text-dark mt-2" style="font-size: 13px;">Valor do item: R$ ${item.price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div class="col-6 offset-6 align-self-center mt-1">
                    <div class="input-group jogo-item-qtarea-carrinho">
                        <button class="btn btn-outline-success btn-sm increment" id="increment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                                <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                            </svg>
                        </button>

                        <input type="number" class="form-control text-center border-light quantity-input" value="${item.inputValue}" readonly>

                        <button class="btn btn-outline-success btn-sm decrement" id="decrement">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        </button>

                        <button id="rm" class="btn btn-outline-danger btn-sm remove-item remove-cart-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;

        cartItemsList.appendChild(cartItemElement); // Adiciona o item à lista do carrinho no HTML


        let incrementButton = cartItemElement.querySelector('.increment');
        let decrementButton = cartItemElement.querySelector('.decrement');
        let input = cartItemElement.querySelector('.quantity-input');
        let removeButton = cartItemElement.querySelector('#rm')

        // Event listener para o botão de incremento
        incrementButton.addEventListener('click', function (event) {
            event.stopPropagation();
            const currentValue = parseInt(input.value);
            if (currentValue < 10) {
                input.value = currentValue + 1;
                item.inputValue = input.value; // Atualiza o valor do input no item
                updateCartDropdown();
            }
        });

        // Event listener para o botão de decremento
        decrementButton.addEventListener('click', function (event) {
            event.stopPropagation();
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
                item.inputValue = input.value; // Atualiza o valor do input no item
                updateCartDropdown();
            }
        });

        // Array.from(removeButton).forEach((removeButton) => {
            removeButton.addEventListener('click', (e)=>{removeCartItem(e, item.id)});
            // console.log(removeButton)

        //   });   


        total += (item.price * item.inputValue);

    });

    let totalElement = document.querySelector('.total');
    totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;


}
