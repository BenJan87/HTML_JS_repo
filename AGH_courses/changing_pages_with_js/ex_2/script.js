function decrementCounter() {
    var counterValue = document.querySelector("input[name='counter']").value;

    if (counterValue > 0) {counterValue -= 1}
    document.querySelector("input[name='counter']").value = counterValue;

    var counters = document.querySelectorAll("span");
    counters.forEach(counter => {counter.innerHTML = counterValue});
}

var intervalId = window.setInterval(decrementCounter, 1000);