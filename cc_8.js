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


//Task 3 - Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {   //arrow function calculateServiceFee
    let serviceFee = 0; 
    if (serviceType === "Premium") serviceFee = amount * 0.15;    //applying serviceFee with if / else statements
    else if (serviceType === "Standard") serviceFee = amount * 0.10;
    else (serviceType === "Basic"), serviceFee = amount * 0.05;
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`);   //logging serviceFee w/ .toFixed(2)
};
console.log("---Task 3---");
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"


//Task 4 - Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {   //function calculateShippingCost
    let rentalCost = 0;
    if (carType === "Economy") rentalCost = 40 * days;    //carType: economy = 40 rentalCost
    else if (carType === "Standard") rentalCost = 60 * days;
    else if (carType === "Luxury") rentalCost = 100 * days;    
    if (insurance) rentalCost += 20 * days;      
    
    console.log(`Total Rental Cost: $${rentalCost}`);     //logged shippingCost
};
console.log("---Task 4---");
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"
