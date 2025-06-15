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