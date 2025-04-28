let hunger = 5;
let energy = 5;
let happiness = 5;

function feedPet() {
  hunger -= 1;
  console.log("You fed your pet! Hunger is now " + hunger);
}

if ( hunger <= 0) {
  console.log("Your pet is full and doesn't want to eat more!");
}

function playPet() {
  if (energy > 0) {
    energy -= 1;
    happiness += 1;
    console.log("You played with your pet! Energy: " + energy + ", Happiness: " + happiness);
  } else {
    console.log("Your pet is too tired to play.");
  }
}

function sleepPet() {
  energy += 2;
  console.log("Your pet took a nap! Energy is now " + energy);
}

setInterval(function() {
  hunger += 1;
  console.log("Your pet is getting hungrier! Hunger is now " + hunger);
}, 10000);
