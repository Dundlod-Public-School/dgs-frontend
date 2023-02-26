// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_URL = "https://dgsbackend-u8bc.onrender.com/";
function postTeacher(data) {
	fetch(`${API_URL}teacherApp`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			mode: "cors",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => {
			console.log(value);
			alert(value.message);
		})
		.catch((err) => alert(err));
}

function postStudent(data) {
	fetch(`${API_URL}studentReg`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			mode: "cors",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => {
			console.log(value);
			alert("Registration recored successfully");
		})
		.catch((err) => {
			alert(err);
		});
}

function postContact(data) {
	fetch(`${API_URL}contact`, {
		method: "POST",

		headers: {
			"Content-Type": "application/json",
			mode: "cors",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => console.log(value))
		.catch((err) => console.log(err));
}

export { postTeacher, postStudent, postContact };
