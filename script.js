document.addEventListener("DOMContentLoaded", function(){

const talkButton = document.querySelector(".talk-button");
const contactInfo = document.getElementById("contact-info");

talkButton.addEventListener("click", function(){

if(contactInfo.style.display === "block"){

contactInfo.style.display = "none";

}

else{

contactInfo.style.display = "block";

}

});

});