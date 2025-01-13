function addClass(str, element) {
    removeClass("menuSelected");
    element.classList.add("menuSelected");
    removeClass("UAASelected");
    var list = document.getElementsByClassName(str);
    for (let element of list) {
        element.classList.add("UAASelected");
    }
}

function removeClass(nomClasse) {
    let listSelected = document.getElementsByClassName(nomClasse);
    let longueur = listSelected.length;
    for (let i = 0; i < longueur; i++) {
        listSelected[0].classList.toggle(nomClasse);
    }
}

function toogleVisibility(nomClasse, e, index=1) {
    let menuSelected = document.getElementsByClassName("menuSelected");
    menuSelected[index].classList.remove("menuSelected");
    let listSelected = document.getElementsByClassName("visible");
    let longueur = listSelected.length;
    for (let i = 0; i < longueur; i++) {
        listSelected[i].classList.add("hidden");
        listSelected[i].classList.remove("visible");
    }
    let element = document.getElementById(nomClasse);
    element.classList.remove("hidden");
    element.classList.add("visible");
    e.classList.add("menuSelected");
}
