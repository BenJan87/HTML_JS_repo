let button = document.getElementById('btn');
let count = 0;
button.addEventListener("click", incr = () => {
    button.innerHTML = count;
    parseInt(count);
    count += 1;
    btn.innerHTML = count;
});