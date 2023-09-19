const bt=document.getElementById("btn")
const amt=document.getElementById("a")
const tip=document.getElementById("p")
const total=document.getElementById("result")

function calculatetip() {
    let a=amt.value;
    const t=tip.value;
    const tiptotal=a*(1+t/100)
    total.innerText=`Total Bill: ${tiptotal.toFixed(2)}`
}
bt.addEventListener("click",calculatetip)