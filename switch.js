var a = parseInt(prompt("Enter the frist nummber"));
var b = parseInt(prompt("Enter the second nummber"));
var choice = parseInt(prompt("1 for Add \n2 for sub \n3 for mul \n4 for Division \n5 modul \n\n\nEnter the choice "));
switch(choice){
    case 1:
        let add = a + b;
        console.log("Add =",add);
        break;

    case 2:
        let sub = a-b;
        console.log("sub=",sub);
        break;

    case 3:
        let mul =a*b;
        console.log("mul=",mul);
        break;

    case 4:
        let div =a/b;
        console.log("div=",div);
        break
    case 5:
        let modul =a%b;
        console.log("modul=",modul);
        break;
        
}