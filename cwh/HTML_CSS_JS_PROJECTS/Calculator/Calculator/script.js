string=''
buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
      if(e.target.innerHTML == '='){
        string = eval(string);   // to evaluate the string(whatever operation is peformed)
        document.querySelector('input').value = string;  //gives the evaluated string
      }
      else if(e.target.innerHTML == 'C'){
        string = ""   //if C is pressed then empty string is returned
        document.querySelector('input').value = string;
      }
      else{
        console.log(e.target)     //nahi toh just continue to show what all is pressed an append it to the string until = or c is pressed
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
    })
})