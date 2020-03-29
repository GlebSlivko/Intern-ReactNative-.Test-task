// Task 3.CodeKiev employees

const employees = [
    {"id":1,"name":"Mildred Carson","drinks":["Macchiato"]},
    {"id":2,"name":"Clifford Brown","drinks":["Latte"]},
    {"id":3,"name":"Kellie Fletcher","drinks":["Flat White","Espresso"]},
    {"id":4,"name":"Don Parsons","drinks":["Espresso"]},
    {"id":5,"name":"Renee Reynolds","drinks":["Cappuccino","Macchiato"]},
    {"id":6,"name":"Rudolph Bishop","drinks":["Latte","Macchiato","Flat White"]},
    {"id":7,"name":"Geraldine Carpenter","drinks":["Espresso"]},
    {"id":8,"name":"Hilda Jimenez","drinks":["Latte","Macchiato","Espresso"]},
    {"id":9,"name":"Pauline Roberson","drinks":["Espresso"]},
    {"id":10,"name":"Vanessa Barrett","drinks":["Flat White","Cappuccino","Latte"]}
];

const recipes = {
    "Cappuccino": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.09
    },
    "Espresso": {
        "coffee": 0.01,
        "water": 0.035
    },
    "Latte": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.135
    },
    "Flat White": {
        "coffee": 0.02,
        "water": 0.04,
        "milk": 0.11
    },
    "Macchiato": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.015
    }
};

const prices = {
    "coffee": 3.6,
    "water": 1,
    "milk": 1.5
};

function task3(M) {
    // Initialize an empty array, write the result of what the function returns to it
    let result = [];

    // Initialize an empty object in which we write the prices of drinks
    let drinkPrices = {};

    // Got an array with keys from the recipe object, sorted through the array
    // Fields with drink names equal to "0" were written to the drinkPrices object
    // Got an array of ingredients and recorded the names of the drinks and their prices in the drinkPrices object
    Object.keys(recipes).forEach( drink => {  
        drinkPrices[drink] = 0;    
        Object.keys(recipes[drink]).forEach( key =>   
          drinkPrices[drink] += recipes[drink][key] * prices[key]
          );
    });

    // Next, write the "cost" field in each guest. It will contain the price of all drinks for each employee.
    employees.forEach( (employee, index) => {
        employees[index].cost = 0;
        employee.drinks.forEach( drink => employees[index].cost += drinkPrices[drink]);
    });

    // Sorting by price is necessary to invite as many guests as possible (Better than a few cheap ones than one expensive one)
    employees.sort( (a, b) => a.cost >= b.cost ? 1 : -1); 

    // Next, we sort the array of guests and subtract the cost of one guest from the total amount of money while the condition M> = empPrice is satisfied
    for(let i = 0; i < employees.length; i++) {
        const empPrice = employees[i].cost;
        if(M >= empPrice) {
            M -= empPrice;
            result.push(employees[i]);
        }
        else {
            break;
        }
    }

    // sort the array by id
    result.sort( (a, b) => a.id > b.id ? 1 : -1); 

    // remove the cost field
    result.forEach( item => delete item.cost); 

    return result;
}

console.log(task3(0.1));
console.log(task3(0.25));


