function track() {
  //prompt to collect various measurements and change to float
  var sideA = parseFloat(prompt("Enter value of hypotenuse"));
  var sideB = parseFloat(prompt("Enter value of opposite side"));
  var sideC = parseFloat(prompt("Enter value of adjacent"));
  var triangle = ["Equilateral", "isosceless", "scalene", "Not a triangle"];

if (sideA <= 0 || sideB <= 0 || sideC <=0) {
  alert("invalid character");
}
else{if (sideA === sideB && sideB === sideC) {
  alert (triangle[0]);
}
else if(sideA===sideB || sideB===sideC || sideA===sideC) {
  alert (triangle[1]);
}
else if(sideA!==sideB || sideB!==sideC || sideA!==sideC) {
  alert(triangle[2]);
}
else {
  alert(triangle[3]);
}}
};
