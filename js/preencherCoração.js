function toggleHeart(event) {
    event.preventDefault();

    //pega os corações que estão nas imagens com esses ids
    var heartIcon = event.currentTarget.querySelector("#heartIcon");
    var heartFillIcon = event.currentTarget.querySelector("#heartFillIcon");

    // Verificar se o ícone atual é o coração vazio
    if (heartIcon.style.display !== "none") {
        // Ocultar o ícone vazio e exibir o ícone preenchido
        heartIcon.style.display = "none";
        heartFillIcon.style.display = "inline";
    } else {
        // Ocultar o ícone preenchido e exibir o ícone vazio
        heartIcon.style.display = "inline";
        heartFillIcon.style.display = "none";
    }
}