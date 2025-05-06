function lasvegas(amount,name){
    console.log(name + " your tour confirm lasvegas with package " + amount);
    
}

function singapore(amount,name){
    console.log(name + " your tour confirm Gujrat with package " + amount);
    
}
function goa(amount,name){
    console.log(name + " your tour confirm Dubai with package " + amount);
    
}

var budget = 1000;
var name = "Viraj prajapat"

if(budget > 3500)
{
    lasvegas(budget,name)
}else if(budget > 2500)
{
    singapore(budget,name)
}
else if(budget > 1500)
{
    goa(budget,name)
}
else{
    console.log("You have insficient budget you can't go anywhere...");
    
}