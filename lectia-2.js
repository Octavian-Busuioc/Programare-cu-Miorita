// https://miorita.scoalaweb.ro/lessons/2-if
// Scrie un program care să o ajute pe Miorița să ajungă la oricare din pășuni
// Programul trebuie să funcționeze și cu gard, și fără gard

reset();

if (!canMove()) {
  //cu gard
  turnRight();
  turnRight();
  turnRight();
  move();
  turnRight();
  move();
  turnRight();
  move();
  turnRight();
  turnRight();
  turnRight();
  move();
  move();
} else {
  //in cazul in care nu e gard
  move();
  move();
  move();
}

//varianta 2

reset();

if (!canMove()) {
  //cu gard
  for (let i = 0; i < 3; i++) {
    turnRight();
  }
  for (let i = 0; i < 1; i++) {
    move();
  }
  turnRight();
  for (let i = 0; i < 1; i++) {
    move();
  }
  turnRight();
  for (let i = 0; i < 1; i++) {
    move();
  }
  for (let i = 0; i < 3; i++) {
    turnRight();
  }
  for (let i = 0; i < 2; i++) {
    move();
  }
} else {
  //in cazul in care nu e gard
  for (let i = 0; i < 3; i++) {
    move();
  }
}
