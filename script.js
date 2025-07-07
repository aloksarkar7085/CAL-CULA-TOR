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




const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#80d0c7";
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(draw);
  }

  draw();
  
  

let visitCount = localStorage.getItem('visitCount') || 0;

// Increase the count by 1
visitCount++;

// Save it back to localStorage
localStorage.setItem('visitCount', visitCount);

// Display it in the span
document.getElementById('visitCount').textContent = visitCount;
