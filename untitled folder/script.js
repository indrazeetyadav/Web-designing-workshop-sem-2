function check() {
    let ch = document.getElementById("char").value.toLowerCase();
    let result = document.getElementById("result");

    if ("aeiou".includes(ch)) {
        result.textContent = "Vowel";
    } else {
        result.textContent = "Consonant";
    }
}