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
    savings: false, // свойство 
    
};


/* for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        console.log ("done");

        appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }
 
};*/
/*  let i = 0;
while(i<2) {
let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt ("Во сколько обойдется?", "");

if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    console.log ("done");
    appData.expenses[a] = b;} 
    else {                            
    console.log ("bad result");
    i--;
    }
    i++;
}
 */  let i = 0; 
 do {
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
while(i<2); 
    console.log(appData);
    appData.moneyPerDay = appData.budget / 30; 
 alert( "Ваш бюджет на день: " + appData.moneyPerDay + "грн"); 

 








 

 
 







