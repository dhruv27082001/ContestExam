let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let fullName = document.getElementById('full-name').value
    let gender = document.getElementById('gender').value
    let hobbies = document.getElementById('hobbies').value
    let tnC = document.getElementById('t-and-c').checked
    let error = false

    if (isSubmitted) {
        ``
        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {
        //Full name Validation error message.
        if (fullName.length >= 5 && fullName.substring(0,5  )) {
            document.getElementById('full-name-valid').style.display = 'block'
            document.getElementById('full-name-invalid').style.display = 'none'
        } else {
            document.getElementById('full-name-invalid').style.display = 'block'
            document.getElementById('full-name-valid').style.display = 'none'
            error = true
        }

        //gender Validation error message.
        if (gender != 'None') {
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'
        } else {
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'
            error = true
        }
        
        //hobbies validation error message.

        if (hobbies != 'None') {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            error = true
        }

        //Terms ans conditions Validation error message.
        if (tnC) {
            document.getElementById('t-and-c-invalid').style.display = 'none'
        } else {
            document.getElementById('t-and-c-invalid').style.display = 'block'
            error = true
        }

        //Pop-up msg saved successfully.
        if (!error &&  isSubmitted) {
            alert('Your details have been saved successfully!')

            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}

