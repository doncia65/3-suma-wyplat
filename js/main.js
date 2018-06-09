'use strict';

$(document).ready(function () {

    let salaries = [];
    let result = 0;
    let sum = document.getElementById('sum');
    let btn = document.getElementById('count-sum');
    let salary = document.querySelectorAll('span.salary');

    
    for (let i = 0; i < salary.length; i++) {
        salaries.push(salary[i].innerText);
        }
        
        
    for (let i = 0; i < salaries.length; i++) {
        result += parseFloat(salaries[i]);     
        }
    
    
    
    $(btn).click(function () {
        $(sum).text(result);
    });
    
});
