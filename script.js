
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "images/1.jpg";
    randomImage[1] = "images/2.jpg";
    randomImage[2] = "images/3.jpg";
    randomImage[3] = "images/4.jpg";

    var number = Math.floor(Math.random() * randomImage.length);
    
    return document.getElementById('result').innerHTML = '<img src="' + randomImage[number]+'" />'; 
} 









document.addEventListener("DOMContentLoaded", function () {
    
    
    document.querySelector("form").addEventListener("submit", showData);

    function showData(e) {
        e.preventDefault();
        const formData = e.target;
        const message = document.getElementById("message");
        if (formData["first-name"].value !== "Geza" || formData.email.value !== "geza.csosz@gmail.com") {
            message.innerText = "You are not Geza!";
            return;
        }
        message.innerText = `First name: ${formData["first-name"].value}. Email address: ${formData.email.value}.`;
    }
});


    
 