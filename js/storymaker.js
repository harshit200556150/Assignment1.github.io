// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset'); // Added reset button
const storyElement = document.getElementById('story');
const studentIdElement = document.getElementById('studentId');

// Constants for p tag to display query selectors
const noun1Display = document.getElementById('choosenNoun1');
const verbDisplay = document.getElementById('choosenVerb');
const adjectiveDisplay = document.getElementById('choosenAdjective');
const noun2Display = document.getElementById('choosenNoun2');
const settingDisplay = document.getElementById('choosenSetting');

// Constants for pre-defined arrays
const nouns1 = ['turkey', 'Mom', 'Dad', 'dog', 'teacher', 'elephant', 'cat'];
const verbs = ['sat on', 'ate', 'danced', 'with', 'saw', "doesn't like", 'kissed'];
const adjectives = ['happy', 'sad', 'angry', 'funny', 'tall', 'short', 'fat', 'skinny', 'fast', 'slow'];
const nouns2 = ['car', 'house', 'tree', 'park', 'school', 'library', 'store'];
const settings = ['in the park', 'at home', 'at school', 'in the library', 'in the store', 'in the car', 'on the bus'];

// Function to generate a random story
function generateRandomStory() {
    const noun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const setting = settings[Math.floor(Math.random() * settings.length)];
    return `${noun1} ${verb} ${adjective} ${noun2} ${setting}`;
}

// Function to display the story
function displayStory(story) {
    storyElement.textContent = story;
}

// Event listeners for the buttons
noun1Button.addEventListener('click', () => {
    const noun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    noun1Display.textContent = noun1;
});

verbButton.addEventListener('click', () => {
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    verbDisplay.textContent = verb;
});

adjectiveButton.addEventListener('click', () => {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    adjectiveDisplay.textContent = adjective;
});

noun2Button.addEventListener('click', () => {
    const noun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    noun2Display.textContent = noun2;
});

settingButton.addEventListener('click', () => {
    const setting = settings[Math.floor(Math.random() * settings.length)];
    settingDisplay.textContent = setting;
});

playbackButton.addEventListener('click', () => {
    const story = `${noun1Display.textContent} ${verbDisplay.textContent} ${adjectiveDisplay.textContent} ${noun2Display.textContent} ${settingDisplay.textContent}`;
    displayStory(story);
});

randomButton.addEventListener('click', () => {
    const story = generateRandomStory();
    displayStory(story);
});

// Added event listener for reset button
resetButton.addEventListener('click', () => {
    // Clear displayed words
    noun1Display.textContent = '';
    verbDisplay.textContent = '';
    adjectiveDisplay.textContent = '';
    noun2Display.textContent = '';
    settingDisplay.textContent = '';

    // Clear the story
    displayStory('');

    // Clear student ID
    studentIdElement.textContent = '';

    // Add student ID again
    addStudentId();
});

// Function to dynamically add student ID
function addStudentId() {
    const studentId = '200556150'; // Replace with your actual student ID
    const studentName = 'Harshit Gambhir'; // Replace with your actual student name
    studentIdElement.textContent = `Student ID: ${studentId}`;
    studentIdElement.textContent += ` | Student Name: ${studentName}`;

}

// Add student ID on page load
addStudentId();
