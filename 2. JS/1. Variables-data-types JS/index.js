// 1. Як можна оголосити змінну у Javascript?
// Змінна - це "контейнер" в який можна помістити будь-яку необхідну нам інформацію і далі цю інформацію використaти. Будь-яку змінну потрібно оголосити. В JS змінну можна оголосити двома способами: за допомогою слова let і const. (є ще один метод var, але він вважається застарілим). Імʼя змінній можна написати будь-яке головне, щоб воно передавало зміст змінної (тобто те що лежить всередині) Змінну let можна змінювати в процесі коду. let name = Ivan. name = Andriy. Змінна const - є сталою. Її не можна змінювати в процесі коду. const name = Ivan.  

// 2. У чому різниця між функцією prompt та функцією confirm?
//Метод prompt та confirm дозволяють нам взаємодіяти з користувачем через вспливаюче вікно у браузері. За допомогою метода confirm ми можемо вивести вспливаюче вікно у браузері з певню інформацією (текст/числа і т.д) і користувач має два варіанти вибору: Ок і Відміна. Відповідно ми отримаємо відповідь від користувача у вигляді true або false. За допомогою метода prompt у користувача зʼявляється можливість вводити додаткові дані самостійно: текст, числа і т.д. Відповідь ми отримуємо у вигляді рядка. Якщо користувач просто нажме ок (без вводу данних) ми отримаємо відповідь у вигляді "empty string" і якщо користувач нажме відміну ми отримаємо відповідь у вигляді null object.

// 3. Що таке неявне перетворення типів? Наведіть один приклад.
// В JS є три основні типи перетворень: string, number, boolean. Приклад: let example = 'Ivan' + 123; Результат у консолі буде: Ivan123 (з типом string) В даному випадку у нас відбувся неявний тип перетворення. Якщо у нас є рядок (string), після нього стоїть знак + і далі йде число (number), то число перетворитися в (string). І також не важливо, якщо після рядка йдуть ще якісь значення, усі вони будуть “string”. І в даному випадку у нас відбувся неявний кастинг.


const name = 'Ivan';
const admin = name;
console.log(admin);

const days = 5;
const secInDay = 24 * 60 * 60;
console.log(days * secInDay);


// const age = prompt('How old are you?');
// console.log(age);

