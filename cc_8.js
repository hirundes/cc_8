//Task 1 - Employee Salary Calculation 
function calculateSalary(baseSalary, bonus, taxRate) {    //function calculateSalary
    let netSalary = ((baseSalary + bonus) - (baseSalary * taxRate));   //formula netSalary
    console.log(`Net Salary: $${netSalary}`);   //logging netSalary for function
};
console.log("---Task 1---");
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"
