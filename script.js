const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const descriptionInput = document.getElementById('description')
const emailInput = document.getElementById('email-address')
const phoneInput = document.getElementById('phone-number')
const introOutput = document.getElementById('hi')
const descriptionOuput = document.getElementById('description-output')
const contactOutput = document.getElementById('contact')
const codeOutput = document.getElementById('code-area')

const updatePreview = function () {
  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const email = emailInput.value
  const phone = phoneInput.value
  const descriptOut = descriptionInput.value
  const intro = 'Hi, my name is ' + firstName + ' ' + lastName + '!'
  const contactOut =
    'If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '" target="_blank">' +
    email + '</a> or give me a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.'
  introOutput.innerHTML = intro
  descriptionOuput.innerHTML = descriptOut
  contactOutput.innerHTML = contactOut
  codeOutput.innerText =
    '<h1>' + intro + '</h1>' + '\n' + '<p>' + descriptOut + '</p>' + '\n' + '<p>' + contactOut + '</p>'
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
descriptionInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)
