const form = document.getElementById('form');
let inputs = document.querySelectorAll('input');

function showError() {
	event.preventDefault();
	console.log(inputs);
	inputs.forEach(input => {
		if (input.validity.valueMissing || input.validity.typeMismatch) {
			input.classList.add('error-input');
			let errorIcon = input.nextElementSibling;
			errorIcon.classList.remove('hide');
			let errorMsg = errorIcon.nextElementSibling;
			errorMsg.classList.remove('hide');
			errorMsg.textContent = input.validity.valueMissing ? `${input.placeholder} cannot be empty.` : `Looks like this is not an ${input.placeholder}`;
		} else {
			input.classList.remove('error-input');
			if (input.nextElementSibling.classList.contains('error-icon')) {
				let errorIcon = input.nextElementSibling;
				errorIcon.classList.add('hide');
				let errorMsg = errorIcon.nextElementSibling;
				errorMsg.classList.add('hide');
			}
		}
	});
}

form.addEventListener('submit', showError);