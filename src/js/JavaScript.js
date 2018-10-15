'use strict';
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incometValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
let money, time;

startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    enableBtn()
});
expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let mandatoryItemOne = expensesItem[i].value,
            howMuchOne = expensesItem[++i].value;

        if (( typeof (mandatoryItemOne)) === 'string' && ( typeof (mandatoryItemOne)) != null && ( typeof (howMuchOne)) != null
            && mandatoryItemOne != '' && howMuchOne != '' && mandatoryItemOne.length < 50 && (/\d/.test(howMuchOne))){
            appData.expenses[mandatoryItemOne] = howMuchOne;
            sum += +howMuchOne;
        }
        else {
            alert('Вы что-то забыли указать или правильно заполните поля');
           return;
            console.log(mandatoryItemOne);
            console.log(howMuchOne);
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    let nonBindingExpenses;
    let  pattern = /^[а-яА-Яa]+$/;
    optionalExpensesValue.textContent = "";
    for (let i = 0; i < optionalExpensesItem.length; i++) {
         if(pattern.test(optionalExpensesItem[0].value)){
            nonBindingExpenses = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = nonBindingExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }else{
            alert('Введите русские буквыы');
            return;
        }
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay - (expensesValue.textContent /30);
        console.log(appData.moneyPerDay);
        console.log(expensesValue.textContent);
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальынй уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function () {
    for (let i = 0; i < 1; i++) {
        let items = incomeItem.value;
        if (items === null) {
            alert("Вы не можете отменить");
            i--;
        } else if (/\d/.test(items)) {
            alert('Нужно вести текст');
            i--;
        }
        else {
            console.log(Number.isNaN(parseInt(items, 10)));
            console.log("good");
            appData.income = items.split(',');
            appData.income.sort();
        }
    }
    incometValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
expensesItem[0].addEventListener('change', function () {
    chekInputs();
});

expensesItem[1].addEventListener('change', function () {
    chekInputs();
});
expensesItem[2].addEventListener('change', function () {
    chekInputs();
});
expensesItem[3].addEventListener('change', function () {
    chekInputs();
});

optionalExpensesItem[0].addEventListener('change', function () {
    chekInputs2();
});
optionalExpensesItem[1].addEventListener('change', function () {
    chekInputs2();
});
optionalExpensesItem[2].addEventListener('change', function () {
    chekInputs2();
});
function chekInputs() {
    for(let i = 0; i < expensesItem.length; i++ ){
        if(!expensesItem[i].value){
            return;
        }
    }
    optionalExpensesBtn.disabled = false;
    expensesBtn.disabled = false;
    countBtn.disabled = false;
}
function chekInputs2() {
    for(let i = 0; i < optionalExpensesItem.length; i++ ){
        console.log(optionalExpensesItem);
        if(!optionalExpensesItem[i].value){
            return;
        }
    }
    optionalExpensesBtn.disabled = false;
    expensesBtn.disabled = false;
    countBtn.disabled = false;
}

function enableBtn() {
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
}




