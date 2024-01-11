// Define conversion factors
const conversionFactors = {
  soda: 500,
  groceryBags: 15,
  foodWrappers: 5,
  yogurtContainers: 20,
  cottonSwabs: 1,
  cleaningProducts: 100,
  takeoutBoxes: 50,
  takeoutCups: 30,
  straws: 2,
  cutlery: 10,
  plates: 25,
  babyBottles: 150,
  cosmeticBottles: 60,
  toothbrushes: 20,
  toothpaste: 50,
  bulkItems: 1000,
  eyeglasses: 30,
};

// Define the list of items
const items = Object.keys(conversionFactors);

// Calculate plastic footprint
function calculatePlasticFootprint() {
  let totalUsage = 0;

  items.forEach((item) => {
    const inputElement = document.getElementById(`${item}-usage`);
    if (inputElement !== null) {
      if (inputElement.value === null) {
        inputElement.value = 0;
      }
      const usage = parseInt(inputElement.value) || 0;
      totalUsage += usage * conversionFactors[item];
    }
  });

  const totalKg = totalUsage / 1000;
  const footprint = totalKg.toFixed(2);
  document.getElementById("footprint-result").textContent = `${footprint} kg`;
  document.getElementById("results").style.display = "block";

  updateProgressBar(totalKg);
}

// Update progress bar
function updateProgressBar(footprintKg) {
  const progressBar = document.getElementById("progress-fill");
  const maxFootprint = 100;
  const percentage = (footprintKg / maxFootprint) * 100;
  progressBar.style.width = Math.min(percentage, 100) + "%";

  if (percentage <= 25) {
    progressBar.style.backgroundColor = "#4CAF50";
  } else if (percentage <= 50) {
    progressBar.style.backgroundColor = "#FFC107";
  } else if (percentage <= 75) {
    progressBar.style.backgroundColor = "#FF9800";
  } else {
    progressBar.style.backgroundColor = "#F44336";
  }
}

// Add event listeners
document
  .getElementById("calculate-button")
  .addEventListener("click", calculatePlasticFootprint);
document.getElementById("myButton").onclick = function () {
  location.href = "https://www.instagram.com/dharasnehi/?hl=en";
};

// Submit form
function submitForm() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const emailSubject = "New Form Submission from " + name;
  const emailBody = "Name: " + name + "\nAge: " + age;

  //   name and age null alertt
  if (name === null || name === "") {
    alert("Please enter your name");
    return false;
  }
}
