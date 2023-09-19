console.log("This is tut53")
n1="Vaibhav"
n2="Prerna"
function greet(name='Vebsterr') {  //default is assumed if nothing passed 
    console.log("Good morning "+name)
    
}
//parameters are a,b,c and arguments are 10,20,30 for function sum
function sum(a=7,b,c){   //7 is a default parameter
    d=a+b+c
    return d  //returns a value
}
console.log(sum(20,30))

// greet(n1)
// greet(n2)
greet()
function max(a,b){
    if(a>b) return a
    return b
}
//diff between let and var 
//let has block scope or local var but var has global scope can be used anywhere inside a fn i.e. if 
//let x=10 is declared inside a block it cant be used outside that block
function min(a,b){
    if(a<b) return a
    return b
}
console.log(max(10,29))
console.log(min(5,3))