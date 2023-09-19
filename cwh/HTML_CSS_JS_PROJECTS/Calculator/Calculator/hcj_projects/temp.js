cel=document.getElementById('C')
far=document.getElementById('F')
kel=document.getElementById('K')


function computetemp(event){
    current=+event.target.value   //getting the value of target event(+) converts it to a number
    switch(event.target.name){
        case 'C':
            far.value = (current * 1.8 + 32).toFixed(2);   //change farenheigt to this and two decim al places if celcius triggered
            kel.value = (current + 273.15).toFixed(2);
            break;
        case "F":
            cel.value = ((current - 32) / 1.8).toFixed(2);
            kel.value = ((current - 32) / 1.8 + 273.15).toFixed(2);
            break;
        case "K":
        cel.value = (current- 273.32).toFixed(2);
        far.value = ((current- 273.15) * 1.8 + 32).toFixed(2);
        break;
    }
}