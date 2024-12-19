// script.js
const poemContainer = document.getElementById('poem-container');
const userLineInput = document.getElementById('user-line');
const submitButton = document.getElementById('submit-line');

let poemLines = [
    "In the shadow of the divided sky,",
    "Voices whisper, echoing the sigh.",
    "Hope flickers like a distant star,",
    "Yet despair lingers, never too far.",
    "Fragments of dreams scatter like leaves,",
    "In the silence, the heart believes.",
    "Each word a brushstroke on the canvas of night,",
    "Painting the darkness with flickers of light.",
    "Together we rise, together we fall,",
    "In the echoes of love, we hear the call.",
    "Through the storms, we find our way,",
    "In the divided sky, we choose to stay."
];

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to display the poem
function displayPoem() {
    poemContainer.innerHTML = poemLines.join('<br>');
    animateText();
}

// Function to animate text
function animateText() {
    const words = poemContainer.innerText.split(' ');
    poemContainer.innerHTML = ''; // Clear current text
    words.forEach(word => {
        const span = document.createElement('span');
        span.innerText = word + ' ';
        span.style.color = getRandomColor(); // Set random color for each word
        span.style.transition = 'transform 0.5s, color 0.5s';
        span.style.display = 'inline-block';
        span.style.marginRight = '10px'; // Add space between words
        span.addEventListener('mouseover', () => {
            span.style.transform = 'scale(1.5)'; // Grow on hover
            span.style.color = getRandomColor(); // Change color on hover
        });
        span.addEventListener('mouseout', () => {
            span.style.transform = 'scale(1)'; // Shrink back
            span.style.color = 'white'; // Reset color
        });
        poemContainer.appendChild(span);
    });
}

// Function to add user line
function addUserLine() {
    const userLine = userLineInput.value.trim();
    if (userLine) {
        poemLines.push(userLine);
        userLineInput.value = ''; // Clear input
        displayPoem();
    }
}

// Event listeners
submitButton.addEventListener('click', addUserLine);
window.addEventListener('load', displayPoem);

// Add event listeners for images
document.querySelector("#sunset1").addEventListener("click", function() {
    this.style.visibility = "hidden";
});

document.querySelector("#sunset2").addEventListener("click", function() {
    this.style.visibility = "hidden";
});

document.querySelector("#sunset3").addEventListener("click", function() {
    this.style.visibility = "hidden";
});

document.querySelector("#sunset4").addEventListener("click", function() {
    this.style.visibility = "hidden";
});

document.querySelector("#sunset5").addEventListener("click", function() {
    this.style.visibility = "hidden";
});

document.querySelector("#sunset6").addEventListener("click", function() {
    this.style.visibility = "hidden";
});


document.querySelector("#image1").addEventListener("click", function(){
    document.querySelector("#image1").style.visibility = "hidden";
} )

document.querySelector("#image2").addEventListener("click", function(){
    document.querySelector("#image2").style.visibility = "hidden";
} )
document.querySelector("#image3").addEventListener("click", function(){
    document.querySelector("#image3").style.visibility = "hidden";
} )
document.querySelector("#image4").addEventListener("click", function(){
    document.querySelector("#image").style.visibility = "hidden";
} )
document.querySelector("#image5").addEventListener("click", function(){
    document.querySelector("#image5").style.visibility = "hidden";
} )
document.querySelector("#image6").addEventListener("click", function(){
    document.querySelector("#image6").style.visibility = "hidden";
} )

// Function to toggle visibility of images
function toggleImageVisibility(image) {
    if (image.style.visibility === "hidden") {
        image.style.visibility = "visible"; // Show the image
    } else {
        image.style.visibility = "hidden"; // Hide the image
    }
}

// Add click event listeners to each image
document.querySelectorAll(".image-div img").forEach(image => {
    image.addEventListener("click", function() {
        toggleImageVisibility(this.parentElement); // Toggle the parent div's visibility
    });
});