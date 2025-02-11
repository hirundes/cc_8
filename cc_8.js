//Task 1 - Employee Salary Calculation 
function calculateSalary(baseSalary, bonus, taxRate) {    //function calculateSalary
    let netSalary = ((baseSalary + bonus) - (baseSalary * taxRate));   //formula netSalary
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);   //logging netSalary for function
};
console.log("---Task 1---");
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"


//Task 2 - Product Price After Discount
const calculateDiscount = function(price, discountRate) {    // function expression calculateDiscount
    let finalPrice = price - (price * discountRate);     //formula finalPrice
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);   //logging finalPrice w/ .toFixed(2)
};
console.log("---Task 2---");
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"


