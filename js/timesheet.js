//window.addEventListener('load', function() {

/* essa linha será responsável por criar o a linha do timesheet*/

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
    matrix.push(new Array(7))

    return matrix.length - 1;

}

function PreencheColuna(ondeComeca, ondetermina, colorName) {

    let linha = checaLinha(ondeComeca, ondetermina);


    for (let i = ondeComeca; i <= ondetermina; i++) {

        matrix[linha][i] = 1;
        let l = document.getElementsByClassName("linha l" + linha);

        let c = document.getElementsByClassName("coluna c" + i);

        c[linha].classList.add(colorName);


        //console.log('.linha' + " .l" + linha + '.coluna' + " .c" + i);


        //substituir por um codigo unico para a tarefa

    }

}

//usar innerhtml
//concatnar com o texto existente criando uma nova div, que vai ter q ter a class linha, e data-linha matrix.lenght-1
PreencheColuna(0, 5, "red")
PreencheColuna(2, 6, "blue")

//console.log(matrix);