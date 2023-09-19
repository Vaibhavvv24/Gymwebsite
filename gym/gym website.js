const name1=document.getElementById("n")
const phone=document.getElementById("p")
const email=document.getElementById("e")
function namefunc() {
    const n=name1.value
    const p=phone.value
    const e=email.value
    if(p==='') alert("please enter valid phone number")
    else if(e==='') alert("please enter valid email")
    else if(n==='') alert("please enter name")
    else {
alert("Your details have been received")
}
}
  //event fires on window loading
    const button = document.querySelector('#submit');
    button.addEventListener('click', namefunc)