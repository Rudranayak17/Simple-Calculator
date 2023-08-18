const resultBox = document.getElementById("resultBox");
const inputButtons = document.querySelectorAll(".inputButton button");

let equation = ""; // Stores the equation being built

function updateResult() {
    resultBox.querySelector("p").textContent = equation || "0";
}

inputButtons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (!isNaN(buttonText) || buttonText === ".") {
            equation += buttonText;
            updateResult();
        } else if (buttonText === "C") {
            equation = "";
            updateResult();
        } else if (buttonText === "=") {
            try {
                // Use JavaScript's built-in eval() to evaluate the equation
                equation = eval(equation).toString();
                updateResult();
            } catch (error) {
                equation = "Error";
                updateResult();
            }
        } else {
            equation += " " + buttonText + " ";
            updateResult();
        }
    });
});
