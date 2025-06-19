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

const hasVisited = localStorage.getItem("hasVisitedCalculator");

  const url = hasVisited
    ? "https://api.countapi.xyz/get/alok-website/calculator"
    : "https://api.countapi.xyz/update/alok-website/calculator/?amount=1";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById("visitCount").innerText = data.value;
      if (!hasVisited) {
        localStorage.setItem("hasVisitedCalculator", true);
      }
    });

// Unused code cleanup (optional)
// If you don’t have an element with ID 'display', you can remove this
/*
document.getElementById('display').addEventListener('input', (event) => {
  const inputValue = event.target.value;
  console.log(inputValue);
});
*/


