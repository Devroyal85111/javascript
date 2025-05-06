var math=parseInt(prompt("Enter the Math num:-"));
var Eng=parseInt(prompt("Enter the Eng num:-"));
var Hinidi=parseInt(prompt("Enter the Hinidi:-"));
var computer=parseInt(prompt("Enter the Computer:-"));
var add=math+Eng+Hinidi+computer;
console.log("Total marks of all subjacts",add);
var per = Math.floor(add/4)
console.log("percentage =",per);
if(per>90)
{
    console.log("Grade :A");
}
else if(per>80)
{
    console.log("Grade:B");
}
else if(per>70)
{
    console.log("Grade:C");
}
else if(per>60)
{
    console.log("Grade:D");
}
else if(per>50)
{
    console.log("Grade:E");
}
else{
    console.log("Fail");
}
