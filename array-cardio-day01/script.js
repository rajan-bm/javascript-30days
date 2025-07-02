// get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max Planck", last: "", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry Ward",
  "Beethoven, Ludwig van",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Benson, Leana",
  "Bentham, Jeremy",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Bernhard, Sandra",
  "Bernoulli, Daniel",
  "Berry, Wendell",
  "Betjeman, John",
  "Bevan, Aneurin",
  "Biden, Joe",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Black, Max",
  "Blackburn, Henry",
  "Blackwood, Algernon",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenHundreds = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteenHundreds);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInvetors = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(sortedInvetors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYearsLived = inventors.reduce(
  (total, inventor) => inventor.passed - inventor.year + total,
  0
);
console.log(`Total years lived by all inventors: ${totalYearsLived}`);

// 5. Sort the inventors by years lived
const sortedByYearsLived = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
);
console.table(sortedByYearsLived);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")];
// const de = links
//   .map((link) => link.textContent)
//   .filter((street) => street.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphaSortedPeople = people.sort((a, b) => {
  const [alast, afirst] = a.split(", ");
  const [blast, bfirst] = b.split(", ");

  return alast > blast ? 1 : -1;
});

console.table(alphaSortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "truck",
  "car",
  "car",
  "truck",
  "bike",
  "car",
  "bike",
  "car",
  "truck",
  "bike",
  "car",
  "truck",
  "bike",
  "car",
  "truck",
  "bike",
  "car",
  "truck",
  "bike",
  "pogostick",
];

const transportationCount = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.table(transportationCount);
