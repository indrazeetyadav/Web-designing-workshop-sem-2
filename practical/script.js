const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("p");

button.onclick = function () {
    let num = input.value;
    let reversed = num.split("").reverse().join("");
    result.textContent = "Reversed Number: " + reversed;
};