let buttonSetter = document.getElementById('btnSetter');
let buttonClear = document.getElementById('btnClear');

const azureList = ["header", "nav", "aside", "main", "footer"];

buttonClear.addEventListener('click', clear = () =>{
    
    azureList.forEach(el => {
        let para = document.querySelector(el);
        para.classList.remove("azure");
    });
    
    document.querySelector("nav").classList.remove("nav");
    document.querySelector("ul").classList.remove("li");
    document.querySelector("aside").classList.remove("aside");
    document.querySelector("main").classList.remove("main");
    document.querySelector("footer").classList.remove("footer");
    console.log("Clear!");
});



buttonSetter.addEventListener('click', setter = () =>{
    azureList.forEach(el => {
        let para = document.querySelector(el);
        para.classList.add("azure");
    });
    
    document.querySelector("nav").classList.add("nav");
    document.querySelector("ul").classList.add("li");
    document.querySelector("aside").classList.add("aside");
    document.querySelector("main").classList.add("main");
    document.querySelector("footer").classList.add("footer");
});

