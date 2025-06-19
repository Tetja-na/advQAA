<<<<<<< HEAD
// Function Declaration
function calcRectangleArea1(width, height) {
  return width * height;
}
console.log('Function Declaration:', calcRectangleArea1(5, 10));

// Function Expression
const calcRectangleArea2 = function(width, height) {
  return width * height;
};
console.log('Function Expression:', calcRectangleArea2(5, 10));

// Arrow Function
const calcRectangleArea3 = (width, height) => width * height;
console.log('Arrow Function:', calcRectangleArea3(5, 10));
=======
//if/else
//Завдання 1: Визначення рівня успішності студента
//Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. Напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки.
   // Створіть змінну averageGrade і присвойте їй середню оцінку студента (від 0 до 100).
    //За допомогою конструкції if else, визначте та виведіть у консоль рівень успішності студента:
    //Якщо середня оцінка менше 60, вивести "Незадовільно".
   // Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
   // Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
   // Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
   // Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно".
const averageGrade = 79;

if (averageGrade < 60) {
  console.log("Незадовільно");
} else if (averageGrade <= 70) {
  console.log("Задовільно");
} else if (averageGrade <= 80) {
  console.log("Добре");
} else if (averageGrade <= 90) {
  console.log("Дуже добре");
} else {
  console.log("Відмінно");
}
>>>>>>> main
