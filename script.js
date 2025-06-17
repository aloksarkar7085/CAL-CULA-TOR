const dateTimeElement = document.getElementById('date-time');

const input = document.getElementById('inputBox');



setInterval(() => {

  const now = new Date();

  const dateString = now.toLocaleDateString('en-GB', {

    day: '2-digit',

    month: 'short',

    year: 'numeric'

  });

  const timeString = now.toLocaleTimeString();

  dateTimeElement.innerHTML = `<span class="date">${dateString}</span> <span class="time">${timeString}</span>`;

}, 1000);



let buttons =document.querySelectorAll('button');



let string="";

let arr =Array.from(buttons);

arr.forEach(button=>{

    button.addEventListener('click',(e)=>{

if(e.target.innerHTML=='='){

    string=eval(string);

    input.value=string;

}

else if (e.target.innerHTML=='AC'){

    string="";

    input.value=string

}

else if(e.target.innerHTML=='DEL'){

string=string.substring(0,string.length-1);

input.value=string;

}

 else{

    string += e.target.innerHTML;

    input.value=string;

 }

    })



 })
