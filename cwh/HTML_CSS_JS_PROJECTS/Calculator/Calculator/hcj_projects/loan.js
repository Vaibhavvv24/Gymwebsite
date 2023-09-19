function calculateloan(){
    amt=document.getElementById('A').value
    r=document.getElementById('B').value   //getting value of these input tags
    m=document.getElementById('C').value

    interest = (amt * (r * 0.01)) / m;

    mp = (amt / m + interest).toFixed(2)
    document.getElementById('pay').innerHTML=`Monthly Payment: ${mp}`
  
}