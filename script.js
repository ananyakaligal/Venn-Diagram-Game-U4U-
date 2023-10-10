// JavaScript code (script.js)

// Constants
const startButton = document.getElementById('startButton');
const playerNamesForm = document.getElementById('playerNamesForm');
const quizContainer = document.querySelector('.quiz-container');
const quizPages = document.querySelectorAll('.quiz-page');
const nextButtons = document.querySelectorAll('[id^="nextButton"]');
const player1Result = document.getElementById('player1Result');
const player2Result = document.getElementById('player2Result');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');
const quizHeading = document.querySelector('.quiz-heading');

let currentQuestionIndex = 0;

// Event listener for the Start Quiz button
startButton.addEventListener('click', function (e) {
    e.preventDefault();

    // Hide player name input form and show quiz container
    playerNamesForm.style.display = 'none';
    quizContainer.style.display = 'block';

    // Display the first question
    showQuestion(currentQuestionIndex);
});

// Event listeners for Next buttons
nextButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        currentQuestionIndex++;

        // Show the next question or display results
        if (currentQuestionIndex < quizPages.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    });
});

// Prevent the form from submitting and refreshing the page
playerNamesForm.addEventListener('submit', function (e) {
    e.preventDefault();
});

// Function to display a question by index
function showQuestion(questionIndex) {
    // Hide all question pages
    quizPages.forEach(function (page) {
        page.style.display = 'none';
    });

    // Show the current question
    quizPages[questionIndex].style.display = 'block';

    // Update the quiz heading
    quizHeading.textContent = `Question ${questionIndex + 1}`;
}

// Function to calculate and display quiz results
function showResults() {
    // Calculate and display results here
    const player1Name = player1NameInput.value;
    const player2Name = player2NameInput.value;
    
    // You can customize the logic to calculate the results based on user's selections
    // For example, you can keep track of user selections and calculate a score.

    // For now, let's just display a simple message:
    player1Result.textContent = `${player1Name}'s result: Your results are coming soon!`;
    player2Result.textContent = `${player2Name}'s result: Your results are coming soon!`;
}

// Initialize by hiding the quiz container
quizContainer.style.display = 'none';
