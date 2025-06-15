//switch

const averageGrade = 79;
const grade = Math.floor(averageGrade / 10); // 79 → 7

switch (grade) {
  case 10:
  case 9:
    console.log("Відмінно");
    break;
  case 8:
    console.log("Дуже добре");
    break;
  case 7:
    console.log("Добре");
    break;
  case 6:
    console.log("Задовільно");
    break;
  default:
    console.log("Незадовільно");
}
