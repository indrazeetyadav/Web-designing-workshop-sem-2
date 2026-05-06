let employees = [];

document.getElementById("add").onclick = addDetail;
document.getElementById("show").onclick = DisplayEmp;
document.getElementById("filter").onclick = Salary;
document.getElementById("total").onclick = totalsal;
document.getElementById("avg").onclick = avgsal;
document.getElementById("count").onclick = countdep;

function addDetail(){

let name=document.getElementById("name").value;
let id=document.getElementById("id").value;
let sal=parseFloat(document.getElementById("sal").value);
let dept=document.getElementById("dept").value;

if(name==""||id==""||isNaN(sal)||dept==""){
alert("Fill all fields");
return;
}

employees.push({name,id,salary:sal,department:dept});

document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("sal").value="";
document.getElementById("dept").value="";

alert("Employee Added");
}

function DisplayEmp(){
let out="<h3>All Employees</h3>";

employees.forEach(e=>{
out+=`
<div class="card">
${e.name} | ${e.id} | ₹${e.salary} | ${e.department}
</div>
`;
});

document.getElementById("result").innerHTML=out;
}

function Salary(){
let out="<h3>Salary > 50000</h3>";

employees.filter(e=>e.salary>50000)
.forEach(e=>{
out+=`${e.name} - ₹${e.salary}<br>`;
});

document.getElementById("result").innerHTML=out;
}

function totalsal(){
let total=employees.reduce((s,e)=>s+e.salary,0);
document.getElementById("result").innerHTML="Total Salary ₹"+total;
}

function avgsal(){
if(employees.length==0) return;
let avg=employees.reduce((s,e)=>s+e.salary,0)/employees.length;
document.getElementById("result").innerHTML="Average Salary ₹"+avg.toFixed(2);
}

function countdep(){
let c={};

employees.forEach(e=>{
c[e.department]=(c[e.department]||0)+1;
});

let out="<h3>Department Count</h3>";

for(let d in c){
out+=d+" : "+c[d]+"<br>";
}

document.getElementById("result").innerHTML=out;
}