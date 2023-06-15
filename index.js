function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function functionInside(){
        console.log("function inside here!")
    }
}

function returnsAnAnonymousFunction(){
    return ()=>{console.log("Anonymous")}
}

function callbackFunction(){
    console.log("here is the function")
}

console.log(receivesAFunction(returnsAnAnonymousFunction()))