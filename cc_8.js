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
function calculateRentalCost(days, carType, insurance = false) {   //function calculateRentalCost
    let rentalCost = 0;
    if (carType === "Economy") rentalCost = 40 * days;    //carType: economy = 40/dayrentalCost
    else if (carType === "Standard") rentalCost = 60 * days;    //carType: standard = 60/day rentalCost
    else if (carType === "Luxury") rentalCost = 100 * days;     //carType: luxury = 100/day rentalCost 
    if (insurance) rentalCost += 20 * days;     //insurance = +20/day      
    
    console.log(`Total Rental Cost: $${rentalCost}`);     //logged rentalCost
};
console.log("---Task 4---");
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"


//Task 5 - Loan Payment Calculation
function calculateLoanPayment(principle, rate, time) {    //function calculateLoanPayment
    let totalPayment = (principle + (principle * rate * time)).toFixed(2);      //formula totalPayment w/ 2 decimal places
    console.log(`Total Interest: $${totalPayment}`);     //logged totalPayment
}
console.log("---Task 5---");
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"


//Task 6 - Identifying Large Transactions
function filterLargeTransactions(transactions, filterFunction) {    //higher order function filterLargeTransactions
    let transactionOrders = transactions.filter(filterFunction);    //defined transactionOrders and .filter() to filter
    console.log(`Filtered Large Transactions: ${transactionOrders}`);     //logged filtered large transactions: transactionOrders
};
console.log("---Task 6---");
let transactions = [200, 1500, 3200, 800, 2500];
filterLargeTransactions(transactions, amount => amount > 1000);
// Expected output: [1500, 3200, 2500]


//Task 7 - Shopping Cart Tracker
function createCartTracker() {  //function createCartTracker
    let totalCarts = 0;     //defining totalCarts
    return function(carts) {    //returning function(carts)
        totalCarts += carts;
        return console.log(`Total Cart Value: $${totalCarts}`);    //logging totalCarts
    }
};
console.log("---Task 7---");
let cart = createCartTracker();
cart(20); // Expected output: "Total Cart Value: $20"
cart(35); // Expected output: "Total Cart Value: $55"