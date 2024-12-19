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
        span.style.transition = 'transform 0.5s, color 0.5s';
        span.style.display = 'inline-block';
        span.addEventListener('mouseover', () => {
            span.style.transform = 'scale(1.5)'; // Grow on hover
            span.style.color = '#ffcc00'; // Change color on hover
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