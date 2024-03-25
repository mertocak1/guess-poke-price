const apiKey = "6ffff8b7-f335-4170-9247-5e92958ac831";
const url = "https://api.pokemontcg.io/v2/cards";

let counter = 0;

const counterElement = document.getElementById("currentScore");

// Var
const currentScore = document.getElementById("currentScore");

const mainContent = document.getElementById("mainContent");
// Create main image
const mainImg = document.createElement("img");
mainImg.classList.add(".image");
// mainImg.src = "./assets/img/pokemongo.gif";
// Render Image
// Append to the container
mainContent.append(mainImg);

PokeCardApi(url);

async function PokeCardApi(url) {
  try {
    const response = await axios.get(url, { headers: { "X-Api-Key": apiKey } });
    console.log(response);
    let randomNumber = Math.floor(Math.random() * 250);
    let card = response.data.data[randomNumber];
    console.log(card);
    let cardPrice = card.tcgplayer.prices.normal.market;
    let checker = card.tcgplayer.prices;

    while (cardPrice == undefined) {
      randomNumber++;
      card = response.data.data[randomNumber];
      cardPrice = card.tcgplayer.prices.normal.market;
      console.log(card);
    }

    // gets card img
    const cardImage = card.images.small;
    console.log(response.data.data[randomNumber]);
    // need to be displayed after choose ******

    console.log(cardPrice);

    getImage(cardImage);
    answerButton(cardPrice);
    nextCard(cardImage, cardPrice);
  } catch (error) {
    PokeCardApi(url);
  }
}

function getImage(image) {
  // Grab main container

  mainImg.src = image;
  // Append to the container
}

function answerButton(price) {
  //Create 3 random numbers based on the correct price
  let answer1 =
    Math.floor(
      (Math.floor(Math.random() * (price + 2 - (price - 1) + (price - 1))) +
        Math.random()) *
        100
    ) / 100;
  let answer2 =
    Math.floor(
      (Math.floor(Math.random() * (price + 2 - (price - 1) + (price - 1))) +
        Math.random()) *
        100
    ) / 100;
  let answer3 =
    Math.floor(
      (Math.floor(Math.random() * (price + 2 - (price - 1) + (price - 1))) +
        Math.random()) *
        100
    ) / 100;

  let allAnswers = [];

  allAnswers.push(answer1, answer2, answer3, price);

  // console.log("first", allAnswers);

  shuffle(allAnswers);

  // console.log("second", allAnswers);
  const button0 = document.getElementById("button0");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const rightAnswer = price;
  button0.innerText = "$" + allAnswers[0];
  button1.innerText = "$" + allAnswers[1];
  button2.innerText = "$" + allAnswers[2];
  button3.innerText = "$" + allAnswers[3];

  button0.addEventListener("click", (e) => {
    if (e.target.innerText == `$${rightAnswer}`) {
      console.log("+1");
      counter += 10;
      counterElement.innerText = counter;
      PokeCardApi(url);
      mainImg.src = "";
    }
  });
  button1.addEventListener("click", (e) => {
    if (e.target.innerText == `$${rightAnswer}`) {
      console.log("+1");
      counter += 10;
      counterElement.innerText = counter;
      PokeCardApi(url);
      mainImg.src = "";
    }
  });
  button2.addEventListener("click", (e) => {
    if (e.target.innerText == `$${rightAnswer}`) {
      console.log("+1");
      counter += 10;
      counterElement.innerText = counter;
      PokeCardApi(url);
      mainImg.src = "";
    }
  });
  button3.addEventListener("click", (e) => {
    if (e.target.innerText == `$${rightAnswer}`) {
      console.log("+1");
      counter += 10;
      counterElement.innerText = counter;
      PokeCardApi(url);
      mainImg.src = "";
    }
  });
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function nextCard(img, price) {
  mainImg.src = img;
}
