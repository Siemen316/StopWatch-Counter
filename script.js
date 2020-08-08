let counter = document.getElementById('counter');
let addCounter = document.getElementById('addCounter');
let lowerCounter = document.getElementById('lowerCounter');
let reset = document.getElementById('reset');
let count = 0;

addCounter.addEventListener('click',incrementCounter);
function incrementCounter(){
    counter.innerText = count+1;
    count++;

    if(counter.innerText>'0')
        counter.style.color = 'green';
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});

}


lowerCounter.addEventListener('click',decrementCounter);
function decrementCounter(){
    counter.innerText = count-1;
    count--;

    if(counter.innerText<'0')
        counter.style.color = '#EA2027';
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}



reset.addEventListener('click',resetCounter);
function resetCounter(){
    count = 0;
    counter.innerText = count;

    if(counter.innerText == '0')
        counter.style.color = 'black'
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}

