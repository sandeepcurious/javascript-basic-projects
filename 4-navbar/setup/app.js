const ButtonWithNavToggleClass=document.querySelector(".nav-toggle");
console.log(ButtonWithNavToggleClass)
const listWithLinksClass=document.querySelector(".links");

ButtonWithNavToggleClass.addEventListener('click',function(){
    listWithLinksClass.classList.toggle("show-links")
})