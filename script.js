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





async function getVisitCount() {

      try {

        const hasVisited = localStorage.getItem("hasVisitedCalculator") === 'true';

        let url;



        if (hasVisited) {

          url = "https://api.countapi.xyz/get/alok-website/calculator";

        } else {

          url = "https://api.countapi.xyz/update/alok-website/calculator/?amount=1";

        }



        const response = await fetch(url, { mode: 'cors' });



        if (!response.ok) {

          throw new Error(`HTTP error! status: ${response.status}`);

        }



        const data = await response.json();



        const visitCountElement = document.getElementById("visitCount");

        if (visitCountElement) {

          visitCountElement.innerText = data.value;

        } else {

          console.warn("Element with ID 'visitCount' not found in the DOM.");

        }



        if (!hasVisited) {

          localStorage.setItem("hasVisitedCalculator", 'true');

        }

      } catch (err) {

        console.error("Visitor counter error:", err.message, err.stack);

        const visitCountElement = document.getElementById("visitCount");

        if (visitCountElement) {

          if (err.message.includes('Failed to fetch')) {

            visitCountElement.innerText = "Network error";

          } else {

            visitCountElement.innerText = "Error fetching count";

          }

        }

      }

    }



    // Run the visitor count script

    getVisitCount();

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
