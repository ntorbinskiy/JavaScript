// 'use strict';


function ShowFirstMassege() {
    let money = prompt("Ваш бюджет на месяц?");
    let time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?");
    }

    return { money: money, time: time };
}

function ShowSecondMassege() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

            console.log("done");

            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}
function ShowOptionalExpenses() {
    for (let i = 0; i < 3; i++) {
        let c = prompt("Статья необязательных расходов?");
        if (typeof (c) === 'string' && typeof (c) !== null && c !== "" && c.length < 50) {
            console.log("done");
            appData.optionalExpenses[i + 1] = c;

        }


    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на день: " + appData.moneyPerDay + "грн");
}

function detectlevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}





let result = ShowFirstMassege();

let appData = {
    budget: Number(result.money), // бюджет
    timeData: result.time, // данные времени
    expenses: {
    }, // объект с обязательными расходами 
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: false, // свойство 

};



ShowSecondMassege();
detectDayBudget();
detectlevel();
ShowOptionalExpenses();

console.log(appData);














