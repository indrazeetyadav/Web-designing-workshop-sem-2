function startMarks(event) {

    if (event.key === "Enter") {

        let m1 = parseFloat(document.getElementById("m1").value);

        if (isNaN(m1)) {
            alert("Enter valid marks for subject 1");
            return;
        }

        let m2 = parseFloat(prompt("Enter marks for Subject 2"));
        let m3 = parseFloat(prompt("Enter marks for Subject 3"));

        if (isNaN(m2) || isNaN(m3)) {
            alert("Invalid marks entered");
            return;
        }

        let total = m1 + m2 + m3;
        let percentage = total / 3;
        let average = percentage;

        let grade;

        if (percentage >= 90) grade = "A+";
        else if (percentage >= 75) grade = "A";
        else if (percentage >= 60) grade = "B";
        else if (percentage >= 50) grade = "C";
        else grade = "F";

        let status = percentage >= 40 ? "Pass" : "Fail";

        document.getElementById("result").innerHTML =
            "Total Marks: " + total + "<br>" +
            "Percentage: " + percentage.toFixed(2) + "%<br>" +
            "Average Marks: " + average.toFixed(2) + "<br>" +
            "Grade: " + grade + "<br>" +
            "Status: " + status;
    }
}