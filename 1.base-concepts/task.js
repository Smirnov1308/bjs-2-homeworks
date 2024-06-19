"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return arr;
} else if (discriminant === 0) {
    let x = -b / (2 * a);
    arr.push(x);
} else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = percent / 100 / 12;
    let loanAmount = amount - contribution;
    let monthlyPayment = loanAmount * (monthlyPercent / (1 - Math.pow(1 + monthlyPercent, -countMonths)));

    let totalPaid = 0;
    for (let i = 0; i < countMonths; i++) {
      totalPaid += monthlyPayment;
    }

    return Number(totalPaid.toFixed(2));
  }