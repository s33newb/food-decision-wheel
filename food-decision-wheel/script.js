let restaurants = [];
let wheel;

function addRestaurant() {
  const input = document.getElementById('restaurant-input').value;
  if(input) {
    restaurants.push(input);
    document.getElementById('restaurant-input').value = '';
    createWheel();
  }
}

function createWheel() {
  wheel = new Winwheel({
    'numSegments': restaurants.length,
    'segments': restaurants.map(r => ({ 'text': r })),
    'animation': { 'type': 'spinToStop', 'duration': 5, 'spins': 8 }
  });
}

function spinWheel() {
  if (wheel) {
    wheel.startAnimation();
  }
}
