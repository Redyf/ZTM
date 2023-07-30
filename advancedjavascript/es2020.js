// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n;
// Ele dá erro pois os 3 números não são do mesmo tipo, o 3 e o 4 são do tipo number e o 1n são do tipo BigInt. Então teremos que converte-los para BigInt.
// BigInt(3) + BigInt(4) + 1n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
    power: "lightning",
    friend: {
      charizard: {
        species: "Dragon Pokemon",
        height: 1.7,
        weight: 90.5,
        power: "fire",
      },
    },
  },
};
will_pokemon?.pikachu?.species;
will_pokemon?.pikachu?.friend?.charizard?.species;

let andrei_pokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 30,
    power: "",
  },
};
andrei_pokemon?.raichu?.species?.height;

if (
  andrei_pokemon &&
  andrei_pokemon.raichu &&
  will_pokemon &&
  will_pokemon.pikachu &&
  will_pokemon.pikachu.friend &&
  will_pokemon.pikachu.friend.charizard
) {
  console.log("fight!");
} else {
  console.log("walk away...");
}
// No caso de ter um string vazio podemos fazer isso
let raichu = andrei_pokemon?.raichu ?? `It's not his pokemon`;
raichu?.will_pokemon;
// Exercise 4: What do these each output?
console.log(false ?? "hellooo"); // false
console.log(null ?? "hellooo"); // hellooo
console.log(null || "hellooo"); // hellooo
console.log((false || null) ?? "hellooo"); // hellooo
console.log(null ?? (false || "hellooo")); // hellooo
