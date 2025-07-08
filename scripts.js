function mudaTab(e, tabName) {
    //areas de conteudo
    const contents = document.getElementsByClassName("tabcontent");

    // botões das abas
    const links = document.getElementsByClassName("nav-link");

    // esconde conteudo das abas
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // remove classe active 
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // mostra o conteudo da aba selecionada
    document.getElementById(tabName).style.display = "block";
    //adiciona classe active
    e.currentTarget.classList.add("active");
}

// executa quando pagina carrega
window.onload = function () {
    document.querySelector('.nav-link').click();
};
function mudaTab(e, tabName) {
    const contents = document.getElementsByClassName("tabcontent");
    const links = document.getElementsByClassName("nav-link");

    // Esconde todos os conteúdos
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // remove a classe active de todos os botões
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // mostra o conteudo da aba clicada e ativa o botão
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.classList.add("active");
}

// ativa a primeira aba ao carregar 
window.onload = function () {
    const firstTab = document.querySelector('.nav-link');
    if (firstTab) {
        firstTab.click();
    }
};
