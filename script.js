// SpendWise Budget Tracker

// Application variables
let budget = 0;
let foodExpenses = 0;
let transportExpenses = 0;
let otherExpenses = 0;
let totalExpenses = 0;
let remainingBalance = 0;


// Function to calculate total expenses
function calculateTotalExpenses(food, transport, other) {
    return food + transport + other;
}


// Function to calculate remaining balance
function calculateRemainingBalance(budgetAmount, expenses) {
    return budgetAmount - expenses;
}


// Function to collect user information
function startBudget() {

    // Collect budget information from the user
    budget = parseFloat(prompt("Enter your total monthly budget:"));

    foodExpenses = parseFloat(prompt("Enter your food expenses:"));

    transportExpenses = parseFloat(prompt("Enter your transport expenses:"));

    otherExpenses = parseFloat(prompt("Enter your other expenses:"));


    // Check that the user entered valid numbers
    if (
        isNaN(budget) ||
        isNaN(foodExpenses) ||
        isNaN(transportExpenses) ||
        isNaN(otherExpenses)
    ) {
        console.log("Please enter valid numbers for all budget information.");
        return;
    }


    // Calculate total expenses
    totalExpenses = calculateTotalExpenses(
        foodExpenses,
        transportExpenses,
        otherExpenses
    );


    // Calculate remaining balance
    remainingBalance = calculateRemainingBalance(
        budget,
        totalExpenses
    );


    // Display results in the browser console
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: KES " + budget.toFixed(2));
    console.log("Food Expenses: KES " + foodExpenses.toFixed(2));
    console.log("Transport Expenses: KES " + transportExpenses.toFixed(2));
    console.log("Other Expenses: KES " + otherExpenses.toFixed(2));
    console.log("Total Expenses: KES " + totalExpenses.toFixed(2));
    console.log("Remaining Balance: KES " + remainingBalance.toFixed(2));


    // Show whether the user stayed within the budget
    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log(
            "Status: You have exceeded your budget by KES " +
            Math.abs(remainingBalance).toFixed(2)
        );
    }
}