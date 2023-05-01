function inserir(num) {
    let numeros = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = numeros + num;
}

function limpar () {
    document.querySelector('.resultado').innerHTML = "";
}

function apagar () {
    let apagar = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = apagar.substring(0, apagar.length -1);
}

function resultado () {
    let resultado = document.querySelector('.resultado').innerHTML;
    if (resultado) {
    document.querySelector('.resultado').innerHTML = eval(resultado);
    } else {
        document.querySelector('.resultado').innerHTML = "";
    }
}