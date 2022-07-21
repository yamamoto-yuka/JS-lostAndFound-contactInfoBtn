let btn = document.getElementById("btn");
let contactInfo = document.querySelector(".contact-information");

btn.addEventListener('click', () =>{
  contactInfo.classList.toggle('active')
})

