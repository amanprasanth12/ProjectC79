student_name = [];

function submit()
{
var name_1= document.getElementById("student_1").value;
var name_2= document.getElementById("student_2").value;
var name_3= document.getElementById("student_3").value;
var name_4= document.getElementById("student_4").value;

student_name.push(name_1);
student_name.push(name_2);
student_name.push(name_3);
student_name.push(name_4);

document.getElementById("display_name").innerHTML = student_name;}

function sort_name()
{
student_name.sort();
document.getElementById("display_name1").innerHTML = student_name;}
