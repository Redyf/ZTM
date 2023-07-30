var database = [
  {
    username: "Mateus",
    password: "potato",
  },
  {
    username: "Sally",
    password: "lol",
  },
  {
    username: "Ingrid",
    password: "777",
  },
];
var newsFeed = [
  {
    username: "Bruno",
    timeline: "I'm done with all this learning",
  },
  {
    username: "Filipe",
    timeline: "JavaScript is so cool",
  },
  {
    username: "Lucas",
    timeline: "NixOS is the best OS ever!",
  },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    console.log("Sorry, wrong name or password...");
  }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
