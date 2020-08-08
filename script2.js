let counter = document.getElementById('counter');
let addCounter = document.getElementById('addCounter');
let lowerCounter = document.getElementById('lowerCounter');
let reset = document.getElementById('reset');
let para = document.getElementById('para');
let count = 0;
 
addCounter.addEventListener('click',incrementCounter);
function incrementCounter(){
    counter.innerText = count+1;
    count++;
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
    x = setTimeout(incrementCounter,1000)

}


lowerCounter.addEventListener('click',decrementCounter);
function decrementCounter(){
    counter.innerText = count;
    count--;
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
    clearTimeout(x);
}



reset.addEventListener('click',resetCounter);
function resetCounter(){
    count = 0;
    counter.innerText = count;
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}

