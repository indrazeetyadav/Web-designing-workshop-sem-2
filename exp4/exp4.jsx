function calculateResult(){
    let n = document.getElementById("subjects").value;
    let total = 0;
    for(let i=1;i<=n;i++)
    {
        let marks = parseFloat(prompt("Enter marks for Subject" + i));
        total = total + marks;
    }
    let average = total/n;
    let grade;
    let result;
    if(average>=90)
    {
        grade = "A+";
        result ="pass";
    }
    else if(average >=75)
    {
        grade = "A";
        result = "pass";
    }
    else if(average >=60)
    {
        grade ="B";
        result = "pass";

    }
    else if(average>=45)
    {
        grade = "C";
        result = "pass";
    }
    else 
    {
        grade = "Fail";
    }
    document.getElementById("result").innerHTML="Total Marks :"+ total +"<br>" + "Average Marks :" + average.toFixed(2) + "<br>" + "grade : " + grade + "<br>" + "result : " + result;
}