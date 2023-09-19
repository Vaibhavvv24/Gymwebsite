const btn = document.getElementById("bt");
const birthday = document.getElementById("d");
const result = document.getElementById("result");

function calculate() {
    const bday=birthday.value
    if(bday==='')
    alert("Please enter birthdate")
    else {
       const age=getage(bday)
        result.innerText=`Your age is ${age}`
    }
}
function getage(bday){
    const currdate=new Date()
    const bdate=new Date(bday)
    let ydiff=currdate.getFullYear()-bdate.getFullYear()
    const mdiff=currdate.getMonth()-bdate.getMonth()
    if(mdiff<0 || (mdiff===0 && currdate.getDate()<bdate.getDate())) ydiff--;
    return ydiff;

}
btn.addEventListener('click',calculate)