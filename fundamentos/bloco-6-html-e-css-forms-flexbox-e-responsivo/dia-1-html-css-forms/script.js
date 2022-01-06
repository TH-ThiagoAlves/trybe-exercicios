let obj = { 
    0:  " AL ",   
    1:  " AP ",   
    2:  " AM ",
    3:  " BA ",
    4:  " CE ",
    5:  " ES ",
    6:  " GO ",
    7:  " MA ",
    8:  " MT ",
    9:  " MS ",
    10: " MG ",
    11: " PA ",
    12: " PB ",
    13: " PR ",
    14: " PE ",
    15: " PI ",
    16: " RJ ",
    17: " RN ",
    18: " RS ",
    19: " RO ",
    20: " RR ",
    21: " SC ", 
    22: " SP ",
    23: " SE ",
    24: " TO ",
    25: " DF ",
    26: " AC "
}; 

let selected = document.querySelector("select")

for (let i = 0; i<27; i++) {
    let option = document.createElement("option")
    option.innerText = obj[i];
    selected.appendChild(option)
}

let data = document.querySelector("#data")

data.addEventListener("keypress", digitoData)


function digitoData(DIGITO) { 
    let numero = parseInt(DIGITO.key)
    if(numero != 0 && numero != 1 && numero != 2 && numero != 3 && numero != 4 && numero != 5 && numero != 6 && numero != 7 && numero != 8 && numero != 9 && DIGITO.key != '/') {
        DIGITO.preventDefault()
    }

}
/*
O dia deve ser > 0 e <= 31.
O mês deve ser > 0 e <= 12.
O ano não pode ser negativo.
Caso alguma das condições seja inválida no momento do envio do formulário, 
exibir via alert uma mensagem de erro contextualizada.
Campo obrigatório
*/
