// 1. Які існують типи даних у Javascript?

// Основні типи даних в JS: string, number, BigIn, boolean, undefined, null, object, symbol.
// string - рядок. Рядок в JS має бути виділений лапками. Є три типи лапок: Подвійні лапки: `"Привіт"`, одинарні лапки: `'Привіт'`, зворотні лапки: ``Привіт``.
// number - для числел циілих і з крапкою.
// BigIn - призначений для дуже великих цифр. В Number найбільше число яке можна використати - це (2(53тут степінь)-1) Відносно недавно був доданий BigIn для представлення цілих чисел довільної довжини.
// boolean - цей тип даних має тільки два значення: true або false
// undefined - означає, що "значення не присвоєно". Змінна може бути оголошена, але якщо їй не призвоєне значення - вона буде undefined.
// null - це тип даних містить тільки одне значення null. Воно представляє абсолютно "нічого", "порожнечу", "невідоме значення".
// object, symbol 

// 2. У чому різниця між == і ===?

// == і === - це оператори порівняння. 
// == - це не суворе порівняння. Не суворе порівння не враховує тип данних і намагається усе прирівняти в один тип данних. Наприклад, він не відрізняє 0 від false. Для нього ось такий приклад буде норм ( 0 == false ); // true
// === - це суворе порівняння. Суворе порівняння перевіряє рівність - без перетворення типів. Тобто якщо взяти той же приклад ( 0 === false ), то тут ми отримаємо false, тому що 0 і "false" - мають різни типи.

// 3. Що таке оператор?

//Оператор в JS - це певна інструкція, за допомогою якої можна задати якийсь крок, щоб обробити інформацію.
//В JS є такі оператори як: оператори порівняння, логічні оператори, оператор присвоювання, унарний оператор, арифметичні оператори, умовні оператори і т.д. Усі вони допомагають "обробити" ту саму інструкцію, за якої IDE зможе прочитати код і вивести результат.




let userName = prompt("Як Вас звуть?");
let age = prompt("Скільки Вам років?");

while (!userName || /\d/g.test(userName)) {
   if (!userName) {
      userName = prompt("Ви не ввели імʼя, повторіть спробу!", userName) || userName;
   }
   if (/\d/g.test(userName)) {
      userName = prompt("Ви ввели некоректне імʼя, повторіть спробу!", userName) || userName;
   }
}

while (!age || isNaN(age)) {
   if (!age) {
      age = prompt("Ви не ввели свій вік, повторіть спробу!", age) || age;
   }
   if (isNaN(age)) {
      age = prompt("Ви ввели не коректний вік, повторіть спробу!", age) || age;
   }
}


if (age < 18) {
   alert("Вам заборонено відвідувати цей веб-сайт");
}
else if (age >= 18 && age <= 22) {
   let ask = confirm("Ви впевнені, що хочете продовжити?");
   if (!!ask) {
      alert("Ласкаво просимо, " + userName);
   }
   else {
      alert("Вам заборонено відвідувати цей веб-сайт");
   }
} else {
   alert("Ласкаво просимо " + userName);
}


