console.log(`Walidacja formularzu`)

let newsLetterForm = document.getElementById('newsletter-form');
let allAgreeCheckbox = document.getElementById('all-agree');



const validate = (event) => {
  
  let txtname = document.getElementById('name');
  let txtemail = document.getElementById('email');
  let agree1 = document.getElementById('agree-1');
  let errors = document.getElementById('errors')
  errors.innerHTML = '';

  if (txtname.value.trim() === ''){
    let liError = document.createElement('li');
    liError.innerText = 'Wpisz imię i nazwisko'; 
    console.log(liError);
    errors.appendChild(liError);
  }
  if (!txtemail.value.includes('@')){
    let liError = document.createElement('li');
    liError.innerText = 'Adres E-mail musze zawierać znak @'; 
    console.log(liError);
    errors.appendChild(liError);
  }
  if (txtemail.value.trim() === ''){
    let liError = document.createElement('li');
    liError.innerText = 'Wpisz adres E-mail'; 
    console.log(liError);
    errors.appendChild(liError);
  }
  if (!agree1.checked){
    let liError = document.createElement('li');
    liError.innerText = 'Nie wyraziłeś zgody 1'; 
    console.log(liError);
    errors.appendChild(liError);
  }
  
  if (errors.children.length > 0){
    event.preventDefault();
  }
};

const allAgree = (event) => {
  let agree1 = document.getElementById('agree-1');
  let agree2 = document.getElementById('agree-2');
  agree1.checked = event.target.checked;
  agree2.checked = event.target.checked;
  
  agree1.disabled = event.target.checked;
  agree2.disabled = event.target.checked;
};

allAgreeCheckbox.addEventListener('change', allAgree);
newsLetterForm.addEventListener('submit', validate);