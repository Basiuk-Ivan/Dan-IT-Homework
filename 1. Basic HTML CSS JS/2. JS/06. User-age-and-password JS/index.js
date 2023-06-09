// 1. Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування?
// Екранування дозволяє нам знаходити спец символи в коді, також через екранування є можливість вжити будь-який спеціальний вираз (буквально). Наприклад в якійсь ситуації нам потрібно написати а * b, де знак * буде не математичним оператором, а буквально символом множення і код не видавав ніякий помилок. Для цього ми зробимо для знака множення екранування (\) - /а\*b/

// 2. Які засоби оголошення функцій ви знаєте?
// Оголошення функції починається з ключового слова function і далі потрібно написати:
// - імʼя функції, наприклад showMessage ()
// - списку параметрів, які записуються в () (за необіхдності)
// - інструкції, які потрібно виконати всередині функції, які записуються в фігурні дужки { }
// І нашу функцію можна викликати в будь-якому місці нашого коду, написавши її імʼя і дужки (): showMessage ()
// showMessage () {
//  console.log('Ivan') }
// showMessage ()
// Також є ще функціональні вирази, вони дозволяють створювати функції всредині будь-якого виразу, наприклад: let test = function () {alert ('Hello')}
// І стрілкові функції. Це більш простіший запис попередньої функції: let test = () => alert ('Hello');

// 3. Що таке hoisting, як він працює для змінних та функцій?
// Наприклад ми можемо викликати функцію в коді "перед" її оголошенням. Тобто спочатку написати:
// showMessage (), а потім
// showMessage () { console.log('Ivan') }
// І навіть, якщо ми викликаємо функцію до її оголошення, код працює - це і називається hosting, тобто ми "підняли" виклик функції до оголошення самої функції.

function createNewUser() {
    this.firstName = prompt('Напишіть Ваше імʼя');
    this.lastName = prompt('Напишіть Ваше прізвище');
    this.birthday = prompt('Напишіть Вашу дату народження у форматі: 05.07.1995');

    this.returnAge = function () {
        let date = new Date();
        let year = date.getFullYear();
        let res = year - this.birthday.slice(6, 11);
        console.log(res);
        return res;
    };

    this.getPassword = function () {
        let password = this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.slice(6, 11);
        console.log(password);
        return password;
    };
}

let newUser = new createNewUser();
console.log(newUser);
newUser.returnAge();
newUser.getPassword();
