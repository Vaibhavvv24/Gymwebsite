window.onload=()=>{
    const button = document.querySelector('.calculate');
button.addEventListener('click', calculatebmi)
}



function calculatebmi(){
    h=document.getElementById("h").value
    w=document.getElementById("w").value
    result=document.querySelector('#result1');


    if (!h || isNaN(h) || h< 0) {
      alert("Please provide a valid height");
    } else if (!w || isNaN(w) || w < 0) {
        alert("Please provide a valid weight");
    }
    const bmi = (w / ((h * h) / 10000)).toFixed(2);

    if(bmi<18.5) result.innerText=`Underweight:${bmi}`
    else if(bmi>=18.5 && bmi<24.9) result.innerText=`Normal:${bmi}`
    else if(bmi>=25 && bmi<29.9) result.innerText=`Over Weight:${bmi}`
    else if(bmi>=30 && bmi<34.9) result.innerText=`Obesity(class I):${bmi}`
    else if(bmi>=35 && bmi<39.9) result.innerText=`Obesity(class II):${bmi}`
    else result.innerText=`Extreme Obesity:${bmi}`
}
