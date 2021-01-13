var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess = null;
var hits = 0;
var guesses = 0 // Количество попыток
var isSunk = false

while (isSunk === false) {
  var guess = prompt('Введи значение');
  if (guess < 0 || guess > 6) {
    alert('incorrect') 
  } else {
    guesses++;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert('HIT!');
      hits++;
      if (hits == 3) {
        isSunk = true;
        alert('Winner!!!')
      }
    } else {
      alert('MISS!');
    }
  }
}
var stats = 'You ' + guesses + ' guesses to sink the battership, ' + 'whichnmeans you shooting accoracy was ' + (3/guesses);
alert(stats)
