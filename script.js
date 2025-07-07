// Show date & time in real time

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



// Calculator logic

let buttons = document.querySelectorAll('button');

let string = "";



let arr = Array.from(buttons);

arr.forEach(button => {

  button.addEventListener('click', (e) => {

    const btnValue = e.target.innerHTML;

    

    // Sound logic

    const soundType = e.target.getAttribute("data-sound");

    if (soundType) {

      const sound = document.getElementById(`sound-${soundType}`);

      if (sound) {

        sound.currentTime = 0;

        sound.play();

      }

    }

    

    // Button behavior

    if (btnValue === '=') {

      try {

        string = eval(string);

        input.value = string;

      } catch {

        input.value = "Error";

        string = "";

      }

    } else if (btnValue === 'AC') {

      string = "";

      input.value = string;

    } else if (btnValue === 'DEL') {

      string = string.substring(0, string.length - 1);

      input.value = string;

    } else {

      string += btnValue;

      input.value = string;

    }

  });

});


let visitCount = localStorage.getItem('visitCount') || 0;

// Increase the count by 1
visitCount++;

// Save it back to localStorage
localStorage.setItem('visitCount', visitCount);

// Display it in the span
document.getElementById('visitCount').textContent = visitCount;

