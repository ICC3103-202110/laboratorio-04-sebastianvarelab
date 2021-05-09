function view(counter){
    return counter
}
function update(msg,counter){
    if (msg=="+"){
        return counter+1
    }
    if (msg=="-"){
        return counter-1
    }
    else{
        return counter
    }
}
counter_=0
var prompt= require ("prompt-sync")();
function app (counter){
    console.log (("Count :"), (view(counter_)))
    console.log("(+) (-)")
    console.log(" ")
    console.log("(q) for quit")
    var msg= prompt("What woul you do? :")
    counter_=update(msg,counter_)
    while(true){
        console.clear()
        if(msg=="q"){
            false
            a="end"
            return a
        }
        else{ 
            return app(counter)
        }
    }
    
     
}
app(0)


  



