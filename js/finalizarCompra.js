function funcao(){
    alert("Parabéns, você finalizou a sua compra")
    clearCart(); 
}

function clearCart() {
    cartItems = []; // Remove todos os itens do carrinho
    updateCartDropdown(); // Atualiza a exibição do carrinho
}