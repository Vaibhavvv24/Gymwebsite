const h = document.getElementById("hrs");
const m = document.getElementById("mins");
const s = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateclock() {
    let hr=new Date().getHours()
    let min=new Date().getMinutes()
    let sec=new Date().getSeconds()
    let amp="AM"
    if(hr>12){
        hr=hr-12;
        amp="PM";
    }
    //checking to change am to pm as soon as hr>12
    hr=hr<10?"0"+hr:hr
    min=min<10?"0"+min:min
    sec=sec<10?"0"+sec:sec
    //these three ensure that jaise hi two digit no aaye pehla 0 hatjayega
    h.innerText=hr
    m.innerText=min
    s.innerText=sec
    ampm.innerText=amp
    setTimeout(() => {
        updateclock();
    }, 1000);
}
updateclock()