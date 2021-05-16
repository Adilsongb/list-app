
/* var lista = ["Feijão", "Biscoito", "Arroz", "Leite"]; */
var lista = [];


/* **************************** */

function addItemAlista() {

    var valorItem = document.getElementById('entrada').value;

    if (valorItem != "" && valorItem != " ") {
        
        for (var i = 0; i < lista.length; i++){

            if (valorItem === lista[i]) {
                
                var itemJaAdd = true;
                break;

            } else {

                itemJaAdd = false;

            }

        }

        if (itemJaAdd) {

            alert("Item já foi adicionado!");
            document.getElementById('entrada').value = "";
            
        } else {

            lista.push(valorItem);
            document.getElementById('lista-conteudos').innerHTML = lista.join("<br><br>");
            document.getElementById('entrada').value = "";

        }

    } else {

        console.log("Informe um valor válido!");
        document.getElementById('entrada').value = "";

    }

    console.log(lista);

    if (lista.length != 0) {
        
        document.getElementById('lista-vazia').style.display = 'none';
        document.getElementById('lista-conteudos').style.display = 'block';
        document.getElementById('apagarLista').style.display = 'block';

    }

}

function organizarLista(){

    lista.sort();
    document.getElementById('lista-conteudos').innerHTML = lista.join("<br><br>");
    console.log(lista);

}

function apagarLista(){

    lista = [];
    document.getElementById('lista-conteudos').innerHTML = "";

    document.getElementById('lista-vazia').style.display = 'flex';
    document.getElementById('lista-conteudos').style.display = 'none';
    document.getElementById('apagarLista').style.display = 'none';

    console.log(lista);

}