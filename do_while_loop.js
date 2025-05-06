let i=2;
var num=29;
var flag=0;
do
{
    if(num%i==0)
    {
        flag=1;
    }    
    i++;
}while(i<num)
if(flag==0)
{
    console.log(num,"is a prime number");
}
else{
    console.log(num,"is a not prime number");
}