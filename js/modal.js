function openItemModal(event) {
    event.stopPropagation();

    let button = event.target;
    let card = button.closest('.card');
    let itemId = button.getAttribute('data-id');
    let itemName = card.querySelector('.card-title').innerText;
    let itemImage = card.querySelector('.modal-imagem').getAttribute('src');
    let itemDescription = card.querySelector('.truncate-3l').innerText;
    let itemPrice = parseFloat(card.querySelector('.card-header').innerText.replace('R$', '').trim());

    // Preencha as informações do modal com os dados do item
    let modalItemImage = document.querySelector('#modalItemImage');
    let modalItemName = document.querySelector('#modalItemName');
    let modalItemDescription = document.querySelector('#modalItemDescription');
    let modalItemPrice = document.querySelector('#modalItemPrice');
    let modalAddToCart = document.querySelector('#modalAddToCart');

    modalItemImage.src = itemImage;
    modalItemName.innerText = itemName;
    modalItemDescription.innerText = itemDescription;
    modalItemPrice.innerText = `R$ ${itemPrice.toFixed(2)}`;
    modalAddToCart.setAttribute('data-id', itemId);
}

function openItemModal1(event, itemImage, itemName, itemDescription, itemPrice, itemId) {
    event.stopPropagation();

    // Preencha as informações do modal com os dados do item
    let modalItemImage = document.querySelector('#modalItemImage');
    let modalItemName = document.querySelector('#modalItemName');
    let modalItemDescription = document.querySelector('#modalItemDescription');
    let modalItemPrice = document.querySelector('#modalItemPrice');
    let modalAddToCart = document.querySelector('#modalAddToCart');

    modalItemImage.src = itemImage;
    modalItemName.innerText = itemName;
    modalItemDescription.innerText = itemDescription;
    modalItemPrice.innerText = `R$ ${itemPrice.toFixed(2)}`;
    modalAddToCart.setAttribute('data-id', itemId);
}