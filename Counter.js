function view(counter){
    return counter
}
function update(msg,counter){
    if (msg=="+"){
        return counter +1
    }
    if (msg=="-"){
        return counter -1
    }
    else{
        return counter
    }
}
counter=0
console.log ("Count")
console.log("(+) (-)")
console.log(" ")
console.log("(q) for quit")
var prompt= require ("prompt-sync")();
var msg= prompt ("What would yo do? ") 
console.log(update(msg,counter))

