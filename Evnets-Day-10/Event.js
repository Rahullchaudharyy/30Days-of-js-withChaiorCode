let ChangeBtn = document.querySelector('#BTN')
let Content_ = document.querySelector('.Para')

ChangeBtn.addEventListener('click', function () {
    Content_.textContent = 'Content Chnged On the click event'
})

let Pucture = document.getElementById('Photo-dbl')
Pucture.addEventListener('dblclick', function () {
    if (Pucture.style.display === 'block') {
        Pucture.style.display = 'none'

    } else {

        Pucture.style.display = 'block'
    }
})


ChangeBtn.addEventListener('mouseover', function () {
    ChangeBtn.style.backgroundColor = 'darkblue'
})
ChangeBtn.addEventListener('mouseout', function () {
    ChangeBtn.style.backgroundColor = ''
})


let input = document.getElementById('Myinput')
input.addEventListener('keydown', (e) => {
    input.placeholder = `${e.key}`
    console.log(e.key)
})

let btn = document.getElementById('Myinput2')
let para_key = document.getElementById('Para-Keyvalue')


btn.addEventListener('keyup', (e) => {
    para_key.innerText = `${e.key}`
    console.log(e.key)
})

let Sub = document.getElementById('Sub-btn')
let Name = document.getElementById('Name-Input')
let email = document.getElementById('Email')
let pwd = document.getElementById('Password')
let Info1 = document.getElementById('p1')
let Info2 = document.getElementById('p2')
let Info3 = document.getElementById('p3')


Sub.addEventListener('click',(e)=>{
   e.preventDefault()
   console.log(Name.value)
   console.log(email.value)
   console.log(pwd.value)
   Info1.innerHTML = `Name: ${Name.value}`
   Info2.innerHTML = `email: ${email.value}`
   Info3.innerHTML = `password: ${pwd.value}`
})


document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("mySelect");
    const displayParagraph = document.getElementById("display");
  
    select.addEventListener("change", function() {
      const selectedValue = select.value;
      displayParagraph.textContent = `Selected Option: ${selectedValue}`; 
    });
  });
  

  let List = document.getElementById('List')

  List.addEventListener('click',function(e){
   if(e.target&& e.target.nodeName==='LI'){
    console.log(e.target.textContent)
   }
  })

  /// One question is remaining---