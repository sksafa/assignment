

// kilometer To Meter Problem Solution
function kilometerToMeter(killometer){
    var meter = 0;
    if(killometer < 0 || killometer == null ){
        meter = "Enter Positive Number";
    }else{
        meter = killometer*1000;
    }
    return meter;
}
var meter = kilometerToMeter(2);
console.log(meter);


// Budgetcalculator Problem Solution
function budgetCalculator(watch,mobile,laptop){
    var totalBudget = 0;
    if( watch < 0 || mobile < 0 || laptop < 0 ){
        totalBudget =" Quntity Must Not Be Nagetive Number";
    }else{
        var watchBudget  = watch * 50;
        var mobileBudget = mobile * 100;
        var laptopBudget = laptop * 500;
        totalBudget  = watchBudget + mobileBudget + laptopBudget;
    }
    return totalBudget;
}
// Zero Quantity Is Allowed
var budget = budgetCalculator(1,2,3);
console.log(budget);


//hotelCost Problem Solution
function hotelCost(day){
    var totalCost = 0;  
    if(day <= 0 || day == null ){
        totalCost = "Day Value Cannot be Zero Or Negative";
    }else if(day <= 10){
        totalCost = day*100;
    }else if(day <= 20){
        var cost = 10*100;
        var discontDay= day-10;
        var discountCost = discontDay*80;
        totalCost = cost + discountCost;    
    }else{
        var cost = 10*100;
        var Cost2 = 10*80;
        var discontDay = day - 20;
        var discountCost = discontDay*50;
        totalCost = cost + Cost2 +discountCost;   
    }
    return totalCost;
}
var cost = hotelCost(10);
console.log(cost);


//MegaFriend Problem Solution
function megaFriend(frindList){
    var letterCount = " ";
    if(friendList.length <= 0){
        letterCount = "Enter A Valid Friend List";
    }else{
        for (var i = 0; i < frindList.length; i++) {
            if (letterCount.length < frindList[i].length) {
                letterCount = frindList[i];
            }
        }
    }
    return letterCount;
}
var friendList = ['safawat','rrrrrrr','rajuda','nahida'];
var result=(megaFriend(friendList));
console.log(result);