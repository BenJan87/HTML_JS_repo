let button = document.getElementById('btn');
button.addEventListener("click", incr = () => {
    console.log(typeof document.forms[0].elements[0].value + " " + typeof document.forms[0].elements[1].value )
});