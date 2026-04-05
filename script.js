document.addEventListener("DOMContentLoaded", function(){

  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll("nav a");
  const talkButton = document.querySelector(".talk-button");
  const contactInfo = document.getElementById("contact-info");

  // Show only one section at a time
  links.forEach(link=>{
    link.addEventListener("click", function(e){
      e.preventDefault();
      const targetId = this.dataset.section;

      sections.forEach(sec => sec.classList.remove("active")); // hide all
      document.getElementById(targetId).classList.add("active"); // show selected
    });
  });

  // Toggle contact info
  talkButton.addEventListener("click", function(){
    contactInfo.style.display = contactInfo.style.display === "block" ? "none" : "block";
  });

});
