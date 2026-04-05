// Wait until the page finishes loading
document.addEventListener("DOMContentLoaded", function () {

    // Get the button and contact section
    const talkButton = document.querySelector(".talk-button");
    const contactInfo = document.getElementById("contact-info");

    // Hide contact info initially
    contactInfo.style.display = "none";

    // Add click event to the button
    talkButton.addEventListener("click", function () {

        // Toggle contact visibility
        if (contactInfo.style.display === "none") {
            contactInfo.style.display = "block";
        } else {
            contactInfo.style.display = "none";
        }

    });

});
