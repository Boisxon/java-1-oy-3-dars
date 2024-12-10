

const num1 = alert("Sizda hozir random sonlar chiqishni boshlaydi");
console.log(num1);


let randomraqam = Math.round(Math.random(2) * 10000 ) ;
alert(`random soningiz:  ${randomraqam}`);

let nam = confirm("Siz random soni 2ga kopaytirmoxchimiz va bolmoxchisi? ")
console.log(nam);
  
let number1 = randomraqam * 2;
let number2 = randomraqam / 2;
let number3 = randomraqam / 3 % 3;


alert(`    sizda random orqali chiqan son:  ${randomraqam} edi 
 biz uni 2 ga ko'paytirib  ${number1} sonni chiqardik,
 va usha soni 2 ga bolib ${number2} sonini chiqardik, 
 va usha soni 3 bolgandagi qoldik ${number3} sonini chiqardik`);