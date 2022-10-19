

let count = 0;
function increment(){

    document.getElementById("decrement-btn").disabled = false;
    count ++;
    
let countElement = document.getElementById("counter").innerHTML = count;
}
function decrement(){
    

    if (count == 0){
        document.getElementById("decrement-btn").disabled = true;
    }
    else {
        count --;    
    }
    
let countElement = document.getElementById("counter").innerHTML = count;
}