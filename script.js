document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll("nav a");
  const talkButton = document.querySelector(".talk-button");
  const contactInfo = document.getElementById("contact-info");

  // MENU NAVIGATION
  links.forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault(); // prevent default scroll
      const targetId = this.getAttribute("href").substring(1); // remove #
      
      // hide all sections
      sections.forEach(sec => sec.style.display = "none");

      // show the clicked section
      document.getElementById(targetId).style.display = "block";

      // scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // TALK BUTTON
  talkButton.addEventListener("click", function(){
    if(contactInfo.style.display === "block"){
      contactInfo.style.display = "none";
    } else {
      contactInfo.style.display = "block";
    }
  });

});
