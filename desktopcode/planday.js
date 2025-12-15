let currentPlan = null;

const dayPlans = {
  space: [
    [
      { time: "Morning", activity: "Rocket Tower & the Blue Streak rocket" },
      { time: "Mid-Morning", activity: "Into Space & Space Oddities exhibits" },
      { time: "Lunch", activity: "Boosters Café" },
      { time: "Afternoon", activity: "Planetarium show: The Night Sky" },
      { time: "Late Afternoon", activity: "Walk around the smaller exhibits" }
    ],
    [
      { time: "Morning", activity: "Tranquility Base lunar experience" },
      { time: "Mid-Morning", activity: "Space Cadets live science demo" },
      { time: "Lunch", activity: "Rocket Tower Café & picnic" },
      { time: "Afternoon", activity: "Engineering challenges & hands-on exhibits" },
      { time: "Late Afternoon", activity: "Planetarium show: One Step Beyond" }
    ],
    [
      { time: "Morning", activity: "Exploring the museum" },
      { time: "Mid-Morning", activity: "Science talk: Gravity" },
      { time: "Lunch", activity: "Boosters Café" },
      { time: "Afternoon", activity: "Planetarium show: We Are Astronomers" },
      { time: "Late Afternoon", activity: "Tetrastar experience" }
    ]
  ],

  zoo: [
    [
      { time: "Morning", activity: "Meet the goats & sheep in the barn" },
      { time: "Mid-Morning", activity: "Tractor ride" },
      { time: "Lunch", activity: "Picnic in the play meadow" },
      { time: "Afternoon", activity: "Woodland trail walk" },
      { time: "Late Afternoon", activity: "Outdoor play park or giant slides" }
    ],
    [
      { time: "Morning", activity: "Animal feeding session" },
      { time: "Mid-Morning", activity: "Petting animals" },
      { time: "Lunch", activity: "Antlers Café" },
      { time: "Afternoon", activity: "Explore woodlands & Dino park" },
      { time: "Late Afternoon", activity: "Adventure playground" }
    ],
    [
      { time: "Morning", activity: "Slow walk through the park" },
      { time: "Mid-Morning", activity: "Visit farm shop" },
      { time: "Lunch", activity: "Laughing Donkey Café" },
      { time: "Afternoon", activity: "Petting animals" },
      { time: "Late Afternoon", activity: "Indoor soft play & craft barn" }
    ]
  ],

  arcade: [
    [
      { time: "Start", activity: "1 game of bowling" },
      { time: "Mid-point", activity: "Arcade games" },
      { time: "Break", activity: "Drinks & snacks" },
      { time: "After", activity: "Photo booth fun" },
      { time: "Finish", activity: "Chill in lounge area watching sports" }
    ],
    [
      { time: "Start", activity: "Two-game bowling match" },
      { time: "Mid-point", activity: "Shuffleboard or mini-golf" },
      { time: "Break", activity: "Fries & soft drinks" },
      { time: "After", activity: "Racing simulators" },
      { time: "Finish", activity: "Winner buys milkshakes" }
    ],
    [
      { time: "Start", activity: "1 casual bowling game" },
      { time: "Mid-point", activity: "Darts" },
      { time: "Break", activity: "Drinks & snacks" },
      { time: "After", activity: "Karaoke booth" },
      { time: "Finish", activity: "Arcade or photo booth" }
    ]
  ]
};

const times = ["10:00", "11:30", "13:00", "14:30", "16:00"];
let currentDay = [];

function generateDay() {
  const place = document.getElementById("placeSelect").value;
  const output = document.getElementById("planOutput");

  output.innerHTML = "";

  if (!place) {
    output.innerHTML = "<p>Please choose a place.</p>";
    return;
  }

  const plans = dayPlans[place];
  currentPlan = plans[Math.floor(Math.random() * plans.length)];

  currentPlan.forEach(item => {
    const div = document.createElement("div");
    div.className = "plan-item";
    div.innerHTML = `
      <div class="plan-time">${item.time}</div>
      <div>${item.activity}</div>
    `;
    output.appendChild(div);
  });
}



function saveDay() {
  if (!currentPlan) return;

  const saved = document.getElementById("savedDays");

  if (!saved.innerHTML) {
    saved.innerHTML = "<h3>Saved Days</h3>";
  }

  const block = document.createElement("div");
  block.className = "plan-item";

  currentPlan.forEach(item => {
    block.innerHTML += `
      <div>
        <strong>${item.time}</strong> – ${item.activity}
      </div>
    `;
  });

  saved.appendChild(block);
}


function saveDay() {
  const planOutput = document.getElementById("planOutput");
  const savedDays = document.getElementById("savedDays");

  if (!planOutput.innerHTML.trim()) {
    alert("Generate a day first!");
    return;
  }

  const savedDay = document.createElement("div");
  savedDay.classList.add("saved-day");

  savedDay.innerHTML = `
    <button class="delete-day">×</button>
    <h3>Saved Day</h3>
    ${planOutput.innerHTML}
  `;

  // Delete button functionality
  savedDay.querySelector(".delete-day").addEventListener("click", () => {
    savedDay.remove();
  });

  savedDays.appendChild(savedDay);
}
