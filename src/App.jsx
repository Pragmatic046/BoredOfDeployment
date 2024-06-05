import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Word1, setWord1] = useState(`Generate Random`);
  const [Word2, setWord2] = useState(` English`);
  const [Word3, setWord3] = useState(` Phrase`);
  const [Symbol, setSymbol] = useState(` Password Including`);
  const [Anumber, setAnumber] = useState(` Symbol & Number`);

  const firstWordList = [
    "Happy",
    "Sad",
    "Angry",
    "Excited",
    "Nervous",
    "Brave",
    "Calm",
    "Eager",
    "Gentle",
    "Proud",
    "Lazy",
    "Kind",
    "Funny",
    "Serious",
    "Careful",
    "Loyal",
    "Friendly",
    "Gloomy",
    "Bright",
    "Clever",
    "Creative",
    "Curious",
    "Dynamic",
    "Energetic",
    "Fierce",
    "Generous",
    "Honest",
    "Humorous",
    "Joyful",
    "Lively",
    "Modest",
    "Patient",
    "Polite",
    "Reliable",
    "Resourceful",
    "Sensible",
    "Sincere",
    "Sympathetic",
    "Thoughtful",
    "Witty",
    "Charming",
    "Compassionate",
    "Considerate",
    "Courageous",
    "Determined",
    "Diligent",
    "Imaginative",
    "Inventive",
    "Observant",
    "Perceptive",
  ];
  const secondWordList = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
  ];
  const thirdWordList = [
    "Running",
    "Jumping",
    "Swimming",
    "Eating",
    "Sleeping",
    "Reading",
    "Writing",
    "Singing",
    "Dancing",
    "Drawing",
    "Cooking",
    "Baking",
    "Fishing",
    "Hiking",
    "Biking",
    "Climbing",
    "Laughing",
    "Crying",
    "Talking",
    "Listening",
    "Working",
    "Playing",
    "Traveling",
    "Flying",
    "Driving",
    "Riding",
    "Skiing",
    "Skating",
    "Surfing",
    "Rowing",
    "Gardening",
    "Painting",
    "Cleaning",
    "Shopping",
    "Hunting",
    "Knitting",
    "Sewing",
    "Running",
    "Joking",
    "Exploring",
    "Walking",
    "Teaching",
    "Learning",
    "Training",
    "Meditating",
    "Jogging",
    "Practicing",
    "Competing",
    "Winning",
    "Losing",
  ];
  const symbolList = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    ".",
    "/",
    "<",
    ">",
    "?",
    "~",
    "`",
  ];

  function Picking() {
    let pickFirst = Math.floor(Math.random(firstWordList.length) * 50);
    let pickSecond = Math.floor(Math.random(secondWordList.length) * 50);
    let pickThird = Math.floor(Math.random(thirdWordList.length) * 50);
    let pickSymbol = Math.floor(Math.random(symbolList.length) * 32);
    let pickNumber = Math.floor(Math.random() * 1000);
    setWord1(firstWordList[pickFirst]);
    setWord2(secondWordList[pickSecond]);
    setWord3(thirdWordList[pickThird]);
    setSymbol(symbolList[pickSymbol]);
    setAnumber(pickNumber);
    // console.log(`${pickFirst}, ${pickSecond}, ${pickThird}, ${pickSymbol}, ${pickNumber}`);
  }

  return (
    <>
      <h2>Random Password Phrase Generator</h2>
      <h3>
        {Word1}
        {Word2}
        {Word3}
        {Symbol}
        {Anumber}
      </h3>
      <button id="btn" onClick={Picking}>
        Discover
      </button>
    </>
  );
}
export default App;
