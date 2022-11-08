const btn= document.querySelector(".burger");
const menu= document.querySelector(".botones");

btn.addEventListener("click",()=>{
    menu.classList.toggle("botones--show");
})