//Завдання 4.3
//    Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
//Округліть кожне отримане значення до 2 значень після крапки
let radiusCylinder = 3;
let height = 7;
let cyllinderVolume = Math.PI * Math.pow(radiusCylinder, 2) * height;
console.log('Zylindervolumen: ', cyllinderVolume.toFixed(2));
