var student={
	address:{},
	education:{
         Ug:{
         	address:{},
         },
         Pg:{
            address:{},
         },
	},
};
function saveFunction() {
	student.name=document.getElementById('name').value;
	student.age=document.getElementById('age').value;
	student.address.city=document.getElementById('rcity').value;
	student.address.state=document.getElementById('rstate').value;
	student.address.country=document.getElementById('rcountry').value;
	student.education.Ug.degree=document.getElementById('ugDegree').value;
	student.education.Ug.college=document.getElementById('ugCollege').value;
	student.education.Ug.marks=document.getElementById('ugMarks').value;
	student.education.Ug.address.city=document.getElementById('ugCity').value;
	student.education.Ug.address.state=document.getElementById('ugState').value;
	student.education.Ug.address.country=document.getElementById('ugCountry').value;
	student.education.Pg.degree=document.getElementById('pgDegree').value;
	student.education.Pg.college=document.getElementById('pgCollege').value;
	student.education.Pg.marks=document.getElementById('pgMarks').value;
	student.education.Pg.address.city=document.getElementById('pgCity').value;
	student.education.Pg.address.state=document.getElementById('pgState').value;
	student.education.Pg.address.country=document.getElementById('pgCountry').value;


	document.getElementById('output').innerHTML=student.name+" "+student.age+"<br>"+
	student.address.city+"<br>"+student.address.state+"<br>"+student.address.country
	+"<br><br>"+student.education.Ug.degree+"<br>"+student.education.Ug.college+"<br>"+
    student.education.Ug.marks+"<br>"+student.education.Ug.address.city+"<br>"+
    student.education.Ug.address.state+"<br>"+student.education.Ug.address.country
    +"<br><br>"+student.education.Pg.degree+"<br>"+student.education.Pg.college
    +"<br>"+student.education.Pg.marks+"<br>"+student.education.Pg.address.city
    +"<br>"+student.education.Pg.address.state+"<br>"+student.education.Pg.address.country;






	console.log(student)
}