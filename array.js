function reverse(name){
    let arr= name.split("")
    let reverse = arr.reverse()
    let str = reverse.join("")
    return str
}
var fname ="Viraj";
var reverseName =reverse(fname)
console.log("Reverse Name =",reverseName);
