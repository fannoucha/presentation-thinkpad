const boutons = document.querySelectorAll(".next-button, .bouton-précédent");
boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        window.location.href = bouton.dataset.page;
    });
});