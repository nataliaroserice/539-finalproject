// Click to flip javascript... Code developed with the help of W3Schools How To- Flip Card (https://www.w3schools.com/howto/howto_css_flip_card.asp) and Code Pen (https://codepen.io/mondal10/pen/WNNEvjV)

document.querySelectorAll('.card-container').forEach(container => {
  const card = container.querySelector('.card');

  container.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  container.setAttribute('tabindex', '0');
  container.setAttribute('role', 'button');
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});

// Scroll to top button - code sourced from W3 schools: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

let mybutton = document.getElementById("to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Quiz JS!!! Developed with support from many tutorials: https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2, https://zephyrnet.com/how-to-make-a-simple-javascript-quiz/, and https://www.sitepoint.com/community/t/very-simple-css-js-quiz/404183
document.getElementById('plant-quiz').addEventListener('submit', function (e) {
  e.preventDefault();

  const light = document.querySelector('input[name="light"]:checked').value;
  const water = document.querySelector('input[name="water"]:checked').value;
  const gallery = document.getElementById('result-gallery');

  let matches = [];

  // Ensured that all possible combinations have a matching recommendation

  if (light === "low" && water === "infrequent") {
    matches = ["ZZ Plant", "Snake Plant", "Cast Iron Plant"];
  } else if (light === "low" && water === "frequent") {
    matches = ["Peace Lily", "Bird’s Nest Fern"];
  } else if (light === "indirect" && water === "infrequent") {
    matches = ["Rubber Plant", "Hoya"];
  } else if (light === "indirect" && water === "moderate") {
    matches = ["Golden Pothos", "Monstera"];
  } else if (light === "bright" && water === "infrequent") {
    matches = ["Aloe Vera", "Jade Plant", "Kalanchoe"];
  } else if (light === "bright" && water === "frequent") {
    matches = ["Fiddle Leaf Fig", "Elephant Ear", "Nanouk"];
  } else if (light === "indirect" && water === "frequent") {
  matches = ["Fiddle Leaf Fig", "Elephant Ear", "Nanouk"];
  } ["Golden Pothos", "Monstera"];

  gallery.innerHTML = "";

  matches.forEach(plant => {
    const { image, desc } = plantData[plant];
    gallery.innerHTML += `
      <div class="result-card">
        <img src="${image}" alt="${plant}">
        <h3>${plant}</h3>
        <p>${desc}</p>
      </div>
    `;
  });

  document.getElementById('plant-result').classList.remove('hidden');
});

// Plant descriptions 
// Note: Plant descriptions developed using ChatGPT 4o on April 24, 2025. Prompt: Please generate brief, playful descriptions for each plant on this list to include in the results of "Hard to Kill Houseplants" compatibility quiz. 
const plantData = {
  "ZZ Plant": {
    image: "images/zz.png",
    desc: "Thrives in low light, needs very little water."
  },
  "Snake Plant": {
    image: "images/snake-plant.png",
    desc: "Tough and sculptural. Barely needs any attention."
  },
  "Cast Iron Plant": {
    image: "images/cast-iron.png",
    desc: "Hard to kill. Truly lives up to its name."
  },
  "Peace Lily": {
    image: "images/peace-lily.png",
    desc: "Blooms indoors with low light and regular moisture."
  },
  "Bird’s Nest Fern": {
    image: "images/birds-nest.png",
    desc: "A gentle, wavy-leafed fern that likes humidity."
  },
 
  "Golden Pothos": {
    image: "images/golden-pothos.png",
    desc: "A classic trailing vine that tolerates a range of conditions."
  },
  "Monstera": {
    image: "images/monstera.png",
    desc: "Large, split leaves and a love for bright, indirect light."
  },
  "Spider Plant": {
    image: "images/spider-plant.png",
    desc: "Cute and adaptable with baby 'pups' you can propagate."
  },
  "Rubber Plant": {
    image: "images/rubber-plant.png",
    desc: "Glossy, dramatic foliage and low-maintenance needs."
  },
  "Hoya": {
    image: "images/hoya.png",
    desc: "Waxy leaves and occasional star-shaped blooms."
  },
  "Philodendron": {
    image: "images/philodendron.png",
    desc: "Easy to grow with heart-shaped leaves."
  },
  "Aloe Vera": {
    image: "images/aloe-vera.png",
    desc: "Sun-loving, low-water succulent with healing gel inside."
  },
  "Jade Plant": {
    image: "images/jade-plant.png",
    desc: "Chunky leaves and a love of sun. A classic succulent."
  },
  "Kalanchoe": {
    image: "images/kalanchoe.png",
    desc: "Succulent with thick leaves and long-lasting blooms."
  },
  "Fiddle Leaf Fig": {
    image: "images/fiddle-leaf.png",
    desc: "Big, bold, and dramatic. Needs attention and light."
  },
  "Elephant Ear": {
    image: "images/elephant-ear.png",
    desc: "Huge leaves. Loves moisture and bright light."
  },
  "Nanouk": {
    image: "images/nanouk.png",
    desc: "Pink, purple, and green striped foliage. Cute and colorful."
  }
};