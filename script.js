const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const descriptionInput = document.getElementById('description')
const emailInput = document.getElementById('email-address')
const phoneInput = document.getElementById('phone-number')
const introOutput = document.getElementById('hi')
const descriptionOuput = document.getElementById('description-output')
const contactOutput = document.getElementById('contact')
const codeIntroOutput = document.getElementById('code-hi')
const codeDescriptionOuput = document.getElementById('code-description-output')
const codeContactOutput = document.getElementById('code-contact')

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
  codeIntroOutput.innerText = intro
  codeDescriptionOuput.innerText = descriptOut
  codeContactOutput.innerText = contactOut
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
descriptionInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)
