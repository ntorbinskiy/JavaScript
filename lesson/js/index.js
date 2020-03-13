let  money;
let time;
let money_1 = prompt("Ваш бюджет на месяц?");
let time_1 = prompt("Введите дату в формате YYYY-MM-DD");

console.log(money_1);
console.log(time_1);

let appData = {
    budget: Number(money_1), // бюджет
    timeData: time_1, // данные времени
    expenses: {
    }, // объект с обязательными расходами 
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: false // свойство 
};


let expenseName1 = prompt( "Введите обязательную статью расходов в этом месяце"),
    cost1 = prompt("Во сколько обойдется?"),
    expenseName2 = prompt( "Введите обязательную статью расходов в этом месяце"),
    cost2 = prompt("Во сколько обойдется?"); 
    (appData.expenses[expenseName1]) = Number(cost1),
    (appData.expenses[expenseName2]) = Number(cost2);

    console.log(appData);
let dayBudgetExpenses = appData.expenses[expenseName1] - appData.expenses[expenseName2]
 let dayBudget = (appData.budget - dayBudgetExpenses)/30;
 alert( "Ваш бюджет на день: " + dayBudget); 








 

 
 







