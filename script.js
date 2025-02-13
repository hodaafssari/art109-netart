
const poemContainer = document.getElementById('poem-container');
const userLineInput = document.getElementById('user-line');
const submitButton = document.getElementById('submit-line');

let poemLines = [
    "In the dust of our land, where the olive trees weep,",
"A tale of the forgotten is whispered in sleep.",
"Beneath the broken skies, in the shadow of stone,",
"We are the ones left standing, but never alone.",

"Our children's laughter is swallowed by fire,",
"As dreams are erased in the darkest of pyre.",
"The winds carry cries through the streets of despair,",
"But the heart of our people still pulses in air.",

"The walls that divide us can never erase,",
"The love in our veins, the strength of our grace.",
"Our voices are muted, yet louder they roar,",
"A song of resistance, of justice, of war.",

"Our homes turn to rubble, our lives torn apart,",
"But hope is a fire that burns in the heart.",
"Through the rubble, through blood, through the tears and the cries,",
"We rise like the sun that refuses to die.",

"In the silence of night, we carry the past,",
"A promise of peace, though the die has been cast.",
"For every soul lost, for each life that falls,",
"We rise with the spirit that answers the call.",

"In the dust of our land, the future is born,",
"In the face of oppression, we are reborn.",
"Though the world may ignore, though the world may deny,",
"Our flame will not fade — it will never die."


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

// display poem
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

// Function to toggle image visability
function toggleImageVisibility(image) {
    if (image.style.visibility === "hidden") {
        image.style.visibility = "visible"; // Show the image
    } else {
        image.style.visibility = "hidden"; // Hide the image
    }
}

// Add click event listeners to each image
document.querySelectorAll("#image-container .image-div img").forEach(image => {
    image.addEventListener("click", function() {
        toggleImageVisibility(this.parentElement); // Toggle the parent div's visibility
    });
});



// Function to download the poem as a text file
function downloadPoem() {
    const poemText = poemLines.join('\n'); // Join the poem lines with new line characters
    const blob = new Blob([poemText], { type: 'text/plain' }); // Create a new Blob with the poem text
    const url = URL.createObjectURL(blob); // Create a URL for the Blob

    const a = document.createElement('a'); // Create an anchor element
    a.href = url; // Set the href to the Blob URL
    a.download = 'poem.txt'; // Set the default file name
    document.body.appendChild(a); // Append the anchor to the body
    a.click(); // Programmatically click the anchor to trigger the download
    document.body.removeChild(a); // Remove the anchor from the document
    URL.revokeObjectURL(url); // Release the Blob URL
}

// Event listener for the download button
document.getElementById('download-poem').addEventListener('click', downloadPoem);