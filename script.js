document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert(" Obrigado por entrar em contato! responderemos em breve")
        form.reset();

    });
});