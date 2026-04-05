document.addEventListener("DOMContentLoaded", function(){

  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll("nav a");
  const talkButton = document.querySelector(".talk-button");
  const contactInfo = document.getElementById("contact-info");

  // MENU: Show only clicked section
  links.forEach(link=>{
    link.addEventListener("click", function(e){
      e.preventDefault();
      const targetId = this.dataset.section;

      sections.forEach(sec => sec.style.display = "none"); // hide all
      document.getElementById(targetId).style.display = "block"; // show selected
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // TALK BUTTON: toggle contact info
  talkButton.addEventListener("click", function(){
    contactInfo.style.display = contactInfo.style.display === "block" ? "none" : "block";
  });

});
