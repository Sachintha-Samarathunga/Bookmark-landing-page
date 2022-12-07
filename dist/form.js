// Validation

const submit = document.querySelector('.submit');
const validationBar = document.querySelector('.validation-bar');

const error = document.querySelector('.error');

submit.addEventListener('click', () => {

	validationBar.style.backgroundColor = 'hsl(0, 94%, 66%)';
})

function validateEmail()  
{  
	var x=document.myform.email.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");

	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){ 
		
		error.style.display = 'block';
		document.getElementById("emailloc").innerHTML=  "<p>Whoops, make sure it's an email</p>";
		return false;   
	}  

	else {
		validationBar.style.backgroundColor = '#00e68a';
		document.getElementById("emailloc").innerHTML=  "<p>Your email submitted successfully...</p>";
	}
}  