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
function app (counter){
const currentView=view(counter)
console.clear()

return counter
}



counter=0
app(0)
var prompt= require ("prompt-sync")();  
while(true){
    console.log (("Count :"), (view(counter)))
    console.log("(+) (-)")
    console.log(" ")
    console.log("(q) for quit")
    var msg= prompt ("What would yo do? ")
    console.clear()
    if(msg=="q"){
        return false
    }
    else{ 
        console.log (("Count :"), (view(update(msg,counter))))
        console.log("(+) (-)")
        console.log(" ")
        console.log("(q) for quit")
        var msg= prompt ("What would yo do? ")
        return true
    }
}


