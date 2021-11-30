
//01
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers + " ")
console.log("")

//02
let result = 0;
for (let sum of numbers) {
  result = result + sum;
}
console.log(result);
console.log("")

//03
let result01 = 0;
for (let media of numbers) {
  result01 = result01 + media;
}
console.log(result01 / numbers.length);
console.log("")

//04
let result02 = 0;
for (let compara of numbers) {
  result02 = result02 + compara;
}
if(result02 / numbers.length > 20){
  console.log("valor maior que 20 = " + result02 / numbers.length)
}else{
  console.log(result02 / numbers.length);
}
console.log("")


//05
let result03 = 0;
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] > result03){
    result03 = numbers[i]
  }
}
console.log("O numero maior é " + result03)
console.log("")


//06
let result04 = 0;
for (let media of numbers) {
  if(media % 2 === 1){
    result04 = result04 + 1;
  }
}
if(result04 === 0){
  console.log("nenhum valor ímpar encontrado");
}else{
  console.log(result04 + " valores ímpares encontrados");
}
console.log("")

//7
let result05 = result03;
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] < result05){
    result05 = numbers[i]
  }
}
console.log("O numero menor é " + result05)
console.log("")

//8 
let cont = [];
for (let i = 0; i <= 25; i++) {
  cont.push(i)
  console.log(cont[i])
}
console.log("")

//9
let divisor = [];
for (let i = 0; i <= 25; i++) {
  divisor.push(i)
  console.log(divisor[i] / 2)
}
console.log("")