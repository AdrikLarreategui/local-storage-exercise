const inputFirstName = document.getElementById('firstName');
const btnName = document.getElementById('btnName');
const inputEmailAdress = document.getElementById('emailAdress');
const btnEmail = document.getElementById('btnEmail');
const inputWriteYourMessage = document.getElementById('writeYourMessage');
const btnMessage = document.getElementById('btnMessage');

function onSubmit(firstName) {
    firstName.preventDefault()
    const firstNameValue = inputFirstName.value
    console.log('hi',firstNameValue)
    localStorage.setItem('firstName', firstNameValue)
}

function onSubmit (emailAdress) {
    emailAdress.preventDefault() 
    const emailAdressValue = inputEmailAdress.value
    console.log('please, write your email adress here', emailAdressValue)
    localStorage.setItem('emailAdress', emailAdressValue)
}

function onSubmit (writeYourMessage) {
    writeYourMessage.preventDefault() 
    const writeYourMessageValue = inputWriteYourMessage.value
    console.log('please, type something here', writeYourMessageValue)
    localStorage.setItem('writeYourMessage', writeYourMessageValue)
}
btnName.addEventListener('click', onSubmit);
btnEmail.addEventListener('click',onSubmit);
btnMessage.addEventListener('click', onSubmit);

localStorage.setItem('user', JSON.stringify ({
    firstName: 'Adrik',
    emailAdress:'adrik12@yahoo.es'

}));

const user = JSON.parse(localStorage.getItem('user'));
console.log("My object", user)
