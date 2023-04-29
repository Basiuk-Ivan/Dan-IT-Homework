## Теоретичні питання

-   Опишіть своїми словами як працює метод forEach.
-   Як очистити масив?
-   Як можна перевірити, що та чи інша змінна є масивом?

## Завдання

Реалізувати функцію фільтру масиву за вказаним типом даних. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

### Технічні вимоги:

-   Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
-   Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].