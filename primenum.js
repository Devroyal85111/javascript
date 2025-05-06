let num = 34;
let dev = 0;
let i = 2;
while(i<num)
{
    if(num%i==0)
    {
        dev = 1;
    }
    i++;
}

if(dev == 0)
{
    console.log(num + " is a prime number");
}
else{
    console.log(num + " is not a prime number");
}