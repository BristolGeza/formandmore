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


    
 