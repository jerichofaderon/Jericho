function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
}
else{
header.style.boxShadow = "none";
}

});