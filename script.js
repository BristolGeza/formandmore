
// Array of image file paths
const images = [
    './assets/images/1.png',
    './assets/images/2.png',
    './assets/images/3.png',
    './assets/images/4.png',
];

// Function to randomly select and display an image
function displayRandomImage() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    // Get the container element
    const imageContainer = document.getElementById('image-container');

    // Create an image element
    const imgElement = document.createElement('img');
    imgElement.src = selectedImage;
    imgElement.alt = `Random image ${randomIndex + 1}`;

    // Clear previous image and append the new one
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}

// Display a random image when the page loads
window.onload = displayRandomImage;









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


    
 
