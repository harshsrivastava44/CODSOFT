document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";

    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent;

            if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (value === "C") {
                currentInput = "";
            } else if (value === "←") {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput += value;
            }

            display.value = currentInput;
        });
    });
});
