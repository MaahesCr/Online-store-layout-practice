
let arr = [
  [document.querySelector(".product0Name").textContent, document.querySelector(".product0Price").textContent,
  document.querySelector(".product0Col").value, document.querySelector(".product0Buy")],

  [document.querySelector(".product1Name").textContent, document.querySelector(".product1Price").textContent,
   document.querySelector(".product1Col").value, document.querySelector(".product1Buy")],

  [document.querySelector(".product2Name").textContent, document.querySelector(".product2Price").textContent,
  document.querySelector(".product2Col").value, document.querySelector(".product2Buy")],

  [document.querySelector(".product3Name").textContent, document.querySelector(".product3Price").textContent,
   document.querySelector(".product3Col").value, document.querySelector(".product3Buy")],

  [document.querySelector(".product4Name").textContent, document.querySelector(".product4Price").textContent,
  document.querySelector(".product4Col").value, document.querySelector(".product4Buy")],

  [document.querySelector(".product5Name").textContent, document.querySelector(".product5Price").textContent,
   document.querySelector(".product5Col").value, document.querySelector(".product5Buy")],

  [document.querySelector(".product6Name").textContent, document.querySelector(".product6Price").textContent,
  document.querySelector(".product6Col").value, document.querySelector(".product6Buy")],

  [document.querySelector(".product7Name").textContent, document.querySelector(".product7Price").textContent,
   document.querySelector(".product7Col").value, document.querySelector(".product7Buy")],

   [document.querySelector(".product8Name").textContent, document.querySelector(".product8Price").textContent,
    document.querySelector(".product8Col").value, document.querySelector(".product8Buy")],
]

// console.log(arr[[0][3]]);
// console.log(arr[0]);
console.log(arr[0][0]);

const func = (btn) => {
  console.log(btn);
}

func(arr[3][1])

let summa = 0;

let buyFunk0 = () => {
  arr[0][2]=document.querySelector(".product1Col").value;
  let sum0 = parseInt(arr[0][2]) * parseInt((arr[0][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK0").textContent = `${arr[0][0]}     - ${arr[0][2]} * ${arr[0][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk1 = () => {
  arr[1][2]=document.querySelector(".product1Col").value;
  let sum0 = parseInt(arr[1][2]) * parseInt((arr[1][1].slice(0,6)));

  document.querySelector(".tovarK1").textContent = `${arr[1][0]}    - ${arr[1][2]} * ${arr[1][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk2 = () => {
  arr[2][2]=document.querySelector(".product2Col").value;
  let sum0 = parseInt(arr[2][2]) * parseInt((arr[2][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK2").textContent = `${arr[2][0]}    - ${arr[2][2]} * ${arr[2][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk3 = () => {
  arr[3][2]=document.querySelector(".product3Col").value;
  let sum0 = parseInt(arr[3][2]) * parseInt((arr[3][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK3").textContent = `${arr[3][0]}    - ${arr[3][2]} * ${arr[3][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk4 = () => {
  arr[4][2]=document.querySelector(".product4Col").value;
  let sum0 = parseInt(arr[4][2]) * parseInt((arr[4][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK4").textContent = `${arr[4][0]}    - ${arr[4][2]} * ${arr[4][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk5 = () => {
  arr[5][2]=document.querySelector(".product5Col").value;
  let sum0 = parseInt(arr[5][2]) * parseInt((arr[5][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK5").textContent = `${arr[5][0]}    - ${arr[5][2]} * ${arr[5][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk6 = () => {
  arr[6][2]=document.querySelector(".product6Col").value;
  let sum0 = parseInt(arr[6][2]) * parseInt((arr[6][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK6").textContent = `${arr[6][0]}    - ${arr[6][2]} * ${arr[6][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk7 = () => {
  arr[7][2]=document.querySelector(".product7Col").value;
  let sum0 = parseInt(arr[7][2]) * parseInt((arr[7][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK7").textContent = `${arr[7][0]}    - ${arr[7][2]} * ${arr[7][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

let buyFunk8 = () => {
  arr[8][2]=document.querySelector(".product8Col").value;
  let sum0 = parseInt(arr[8][2]) * parseInt((arr[8][1].slice(0,6).replace(/\s/g, '')));

  document.querySelector(".tovarK8").textContent = `${arr[8][0]}    - ${arr[8][2]} * ${arr[8][1]} = ${sum0} `;

  summa +=sum0;

  document.querySelector(".pustayK").classList.add('closePK');
  document.querySelector(".polnayK").classList.add('active2');
  document.querySelector(".summa").textContent = `Итоговая сумма: ${summa}₽`;
}

console.log($('.product1Col'));

let openK = () => {
  document.querySelector(".popup").classList.add('active');
}

let closeK = () => {
  document.querySelector(".popup").classList.remove('active');
}

let clearK = () => {
  document.querySelector(".pustayK").classList.remove('closePK');
  document.querySelector(".polnayK").classList.remove('active2');

  document.querySelector(".tovarK0").textContent = '';
  document.querySelector(".tovarK1").textContent = '';
  document.querySelector(".tovarK2").textContent = '';
  document.querySelector(".tovarK3").textContent = '';
  document.querySelector(".tovarK4").textContent = '';
  document.querySelector(".tovarK5").textContent = '';
  document.querySelector(".tovarK6").textContent = '';
  document.querySelector(".tovarK7").textContent = '';
  document.querySelector(".tovarK8").textContent = '';

  summa = 0;
}


// let peremen;
// for (var i = 0; i < 5; i++) {
//  peremen = `string, ${i} dfd`;
// console.log(peremen);
// }

// document.querySelector(".openFast").click(function(){
//   document.querySelector(".popup").addClass('active');
//   document.querySelector(".popup").style.backgroundColor='red';
// });

  // $('.openFast').click(function(){
  //   $('.popup').addClass('active');
  // });

// let openK = () => {
//   document.querySelector(".popup").style.backgroundColor = 'red';
//   document.querySelector(".popup").addClass('active');
// }

// let val = document.getElementById('idd');
// console.log(val.textContent);
// document.getElementById('idd').textContent = 'kek';
// val.textContent = 'kek';
//
// const val2 = document.querySelector('.h5Text');
// val2.textContent = 'wewe';

// let val2 = document.querySelector('.foundBtnn1').textContent;
//
// let arr = [,]
// arr = [
//   [val2,document.querySelector(".foundBtnn1")],
//   [val2,document.querySelector(".foundBtnn1")]
// ]
//
// let arrr = [,]
// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
//
// console.log(arrr[0],[0]);
// console.log(arrr[0,1]);
// console.log(arrr[1,1]);
//
// console.log(arr[0,0]);
// console.log(arr[0,1].textContent);
// console.log(arr[1,1].textContent);
//
// var button = document.querySelector(".foundBtnn1");
// function once() {
//   console.log("Done.");
//   button.removeEventListener("click", once);
// }
// button.addEventListener("click", once);
