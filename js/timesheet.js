//window.addEventListener('load', function() {



var linhas = 3;

//matrix vai ser binária
var matrix = [];
for (var i = 0; i < linhas; i++) {
    matrix[i] = new Array(7);
}



function checaColunas(linha, ondeComeca, ondetermina) {
    // checa se as colunas de certa linha estão ocupadas

    let linhaAtual = matrix[linha];

    for (let i = ondeComeca; i <= ondetermina; i++) {

        if (linhaAtual[i] != undefined) {
            return false;
        }
    }
    return true;
}

//checa se a linha atual está preenchida na parte que precisa
function checaLinha(ondeComeca, ondetermina) {

    for (let i = 0; i < matrix.length; i++) {

        if (checaColunas(i, ondeComeca, ondetermina) == true) {

            return i;

        }

    }
    //criar nova linha caso todas estejam ocupadas
    criaLinha()

    function criaLinha() {

        matrix.push(new Array(7));
        let linha = document.createElement(" linha l" + matrix.length - 1);

    }



    return matrix.length - 1;

}

function PreencheColuna(ondeComeca, ondetermina, colorName, nomeTarefa) {

    let linha = checaLinha(ondeComeca, ondetermina);


    for (let i = ondeComeca; i <= ondetermina; i++) {

        matrix[linha][i] = 1;

        let c = document.getElementsByClassName("coluna c" + i);

        c[linha].classList.add(colorName);

        if (i == ondeComeca) {
            c[linha].classList.add("borderRadiusLeft");
      
        } else if (i == ondetermina) {
            c[linha].classList.add("borderRadiusRight");
        }

        c[linha].classList.add("removeBorder");


        c.textContent = "aaaaaaa";
        //substituir por um codigo unico para a tarefa

    }

}

PreencheColuna(1, 5, "red", "aula")
PreencheColuna(2, 3, "green")
PreencheColuna(0, 1, "blue")

//usar innerhtml
//concatnar com o texto existente criando uma nova div, que vai ter q ter a class linha, e data-linha matrix.lenght-1