// Smooth scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Typing animation
const texts = ["modern web apps.", "creative digital experiences.", "interactive coding projects."];
let count = 0, index = 0, currentText = "", letter = "";
(function type(){
  if(count === texts.length) count=0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index=0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 150);
  }
})();
