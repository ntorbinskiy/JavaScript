// 'use strict';


let money,time;

function ShowFirstMassege() {
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money=="" || money==null) {
        money = prompt("Ваш бюджет на месяц?");
    }
} 
 
ShowFirstMassege();

let appData = {
    budget: Number(money), // бюджет
    timeData: time, // данные времени
    expenses: {
    }, // объект с обязательными расходами 
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: false, // свойство 

};

 function ShowSecondMassege() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    }
 }
ShowSecondMassege();
console.log(appData);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ваш бюджет на день: " + appData.moneyPerDay + "грн");
}
detectDayBudget();


function detectlevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

detectlevel();

function chooseOptExpenses() {
    
}




















