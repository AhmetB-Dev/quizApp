function changeCategory() {
    const categories = ["html", "css", "js", "java"];
    const container = document.getElementById("category-change");

    categories.forEach(category => {
        const a = document.createElement("a");
        a.textContent = category.toUpperCase();
        a.dataset.category = category;

        a.addEventListener("click", (event) => {
            const selectedCategory = event.target.dataset.category;
            showWelcomeMessage(selectedCategory);
        });
        container.appendChild(a);
    });
}

function showWelcomeMessage(categoryName) {
    const welcomeMessage = document.createElement('div');

    const heading = document.createElement('h2');
    heading.textContent = `Welcome to the awesome ${categoryName.toUpperCase()} Quiz`;
    welcomeMessage.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Ready for the challenge?';
    welcomeMessage.appendChild(description);

    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    container.appendChild(welcomeMessage);
}

function startQuiz() {
    const buttonContainer = document.getElementById("start-button");
    buttonContainer.innerHTML = "";

    const startButton = document.createElement('button');
    startButton.textContent = 'Start now >';
    buttonContainer.appendChild(startButton);
}

function renderQuestion() {

}

changeCategory();
document.addEventListener("DOMContentLoaded", () => {
    const defaultCategory = "html"; // Default category
    showWelcomeMessage(defaultCategory);
    startQuiz();
});