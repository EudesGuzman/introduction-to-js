let input = prompt('How many people are coming to your wedding?');

// Your code here

if (input <= 50){
    var price = 4000;
}  else if ( input > 50 && input < 100){
     var price = 10000;
}else if (input >= 100 && input <= 200){
     var price = 15000;
} else if (input > 200){
     var price = 20000;
}


console.log('Your wedding will cost '+price+' dollars');