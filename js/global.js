

function fecharAbrirChat(item) {
    var display = document.getElementById(item).style.display;
    if(display == "none") {

        document.getElementById(item).style.display = 'block';
    }else {

        document.getElementById(item).style.display = 'none';
    }
};











function mudarStyleDisplay(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

