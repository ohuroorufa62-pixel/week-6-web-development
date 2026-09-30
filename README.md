# SpendWise Budget Tracker

## Project Description

SpendWise is an interactive budget tracker that helps users set a budget, add expenses, view their spending, and see how much money remains. This week, I improved the project by adding JavaScript functionality so the webpage can respond to user actions and update information automatically.

## JavaScript Concepts Used

The project uses several JavaScript concepts, including variables, conditionals, arrays, loops, functions, DOM manipulation, and event listeners.

### Conditionals

Conditional statements are used to check the user's budget situation. For example, SpendWise checks whether the user has exceeded the budget, reached the budget, is close to the limit, or is still within the budget.

### Arrays

An array called `expenses` is used to store multiple expense records. Each expense contains a name, amount, and category. New expenses are added to the array using `push()`, while expenses can be removed using `splice()`.

### Loops

A `for` loop is used to go through all the expense records in the array. The loop calculates the total amount spent and displays each expense on the webpage.

### DOM Manipulation

DOM manipulation is used to update the webpage without refreshing it. JavaScript changes the budget, total expenses, remaining amount, messages, and expense list directly in the HTML.

### Events and User Interaction

Event listeners allow the application to respond to user actions. The budget button listens for a click, while the expense form listens for a submit event. When the user adds an expense, JavaScript collects the information, stores it in the array, and updates the dashboard.

## Challenges and Solutions

One challenge I encountered was making sure the total expenses were calculated correctly when there were multiple records. I solved this by storing the expenses in an array and using a loop to calculate the total. Another challenge was updating the webpage whenever an expense was added or deleted. I created an `updateDashboard()` function that recalculates the totals and displays the current information. I also used `event.preventDefault()` to stop the form from refreshing the page when an expense was submitted.

## How to Run the Project

1. Download or clone the SpendWise project.
2. Open the project folder.
3. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in a web browser.
5. Enter a budget and add expenses to test the application.

## Files

* `index.html` - Contains the structure of the SpendWise webpage.
* `style.css` - Contains the styling and layout.
* `script.js` - Contains the JavaScript functionality.
* `README.md` - Explains the project and the concepts used.
