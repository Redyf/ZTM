//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//#2 return value when moveCommand("forward");
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      return direction;
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}
//#3 return value when moveCommand("back");
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//#4 return value when moveCommand("right");
function moveCommand(direction) {
  switch (direction) {
    case "forward":
      return "Looks like there is a village next to your location...";
    case "right":
      return "You heard someone screaming, I wouldn't go there...";
    case "back":
      return "You've found a tavern!";
    case "left":
      return "You've got to the river";
    default:
      return "Looks like you're lost...";
  }
}
//#5 return value when moveCommand("left");
function moveCommand(direction) {
  switch (direction) {
    case "forward":
      return "You found a chest!";
    case "right":
      return "You found an apple!";
    case "back":
      return "There is an animal next to you, be careful...";
    case "left":
      return "You arrived at your destination!";

    default:
      break;
  }
}

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
