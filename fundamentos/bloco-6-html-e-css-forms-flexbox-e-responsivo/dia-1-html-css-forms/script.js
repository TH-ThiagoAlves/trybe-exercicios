let picker = new Pikaday({
    field: document.getElementById('data-inicio'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#message', [
    {
      validator: (value) => {
        return value[0] === '!';
      },
    },
  ])



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

/*
let data = document.querySelector("#data")

data.addEventListener("keypress", digitoData)

function digitoData(DIGITO) { 
      let numero = parseInt(DIGITO.key)
    if(numero != 0 && numero != 1 && numero != 2 && numero != 3 && numero != 4 && numero != 5 && numero != 6 && numero != 7 && numero != 8 && numero != 9 && DIGITO.key != '/') {
        DIGITO.preventDefault()
    }
}
*/
