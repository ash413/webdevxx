/*let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function decrease() {
    count = count - 1;
    console.log(count)
}
function reset() {
    count = 0
    console.log(count)
}
function increase() {
    count = count + 1
    console.log(count)
}*/


//set initial count
let count = 0;
//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns);
btns.forEach( function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count==0){
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})