//finding html selector by CSS Selectors
//tagakuha ng selectio
const form = document.querySelector('#formvalues');
const applicantForm = document.querySelector(`#welcomeLog`);
const line = document.querySelector(`#line`);

//when pressing the form submit button, it will trigger the program
form.addEventListener('submit', (e) => {
	e.preventDefault();

	//selector for Class Applicant
	const fullName = document.querySelector('#fullName').value;
	const eMail = document.querySelector('#eMail').value;
	// const ign = document.querySelector('#ign').value;
	const role_1 = document.querySelector('#firstRole').value;
	const role_2 = document.querySelector('#secondRole').value;
	const id = document.querySelector('#id').value;

	//creating objects
	const applicant1 = new Applicant(fullName, eMail, role_1, role_2, id);
	const post = new Post(applicant1);

	if (!post.checkInfo(applicant1)) {
		console.log('Cannot add');
	} else {
		applicantForm.innerHTML += `${post.include(applicant1)}<hr /> <br /> `;
		console.log(applicant1);
		line.style.post = 'grid';
		console.log('Hello');
	}
});

//class/blueprint for methods
class Post {
	include(applicant) {
		return `
		<b>Welcome </b> <span id='hello'>${applicant.fullName}</span> <br />
		`;
	}

	checkInfo(applicant) {
		if (applicant.fullName === '') {
			return false;
		} else if (applicant.id.length < 8) {
			return false;
		} else if (applicant.role_1 === 'role 1') {
			return false;
		} else if (applicant.role_2 === 'role 2') {
			return false;
		} else if (applicant.role_2 == applicant.role_1) {
			return false;
		} else {
			return true;
		}
	}
}

//class for applicant fields
class Applicant {
	constructor(fullName, eMail, role_1, role_2, id) {
		this.fullName = fullName;
		this.eMail = eMail;
		// this.ign = ign;
		this.role_1 = role_1;
		this.role_2 = role_2;
		this.id = id;
	}
}
