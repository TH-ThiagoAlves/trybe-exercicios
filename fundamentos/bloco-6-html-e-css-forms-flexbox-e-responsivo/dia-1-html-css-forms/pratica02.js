// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function evento(LINK) {
    LINK.preventDefault();
}

function eventoDois(DIGITO) { 
   if(DIGITO.key != 'a' && DIGITO.key != 'A') {
       DIGITO.preventDefault()
   }
}

HREF_LINK.addEventListener('click', evento);
INPUT_TEXT.addEventListener('keypress', eventoDois)