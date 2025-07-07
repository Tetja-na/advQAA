//Завдання 2: String-Verkettung und Template-Strin Конкатенація радків та шаблонний рядок
let person1 = 'Tetiana';
let person2 = 'Anna';
//normale Verkettung
let greeting1 = 'Hallo, ' + person1 + ' und ' + person2 + '!';
console.log(greeting1);
//шаблонний рядок для створення того ж вітання Vorlagenzeichenfolge zum Erstellen derselben Begrüßung
let greeting2 = 'Hallo, ${person1} und ${person2}! ';
console.log(greeting2);
