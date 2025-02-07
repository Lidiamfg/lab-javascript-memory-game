const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {

    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);



      if (memoryGame.pickedCards.length < 2) {
        card.classList.toggle('turned');
        memoryGame.pickedCards.push(card);
        console.log(memoryGame.pairsClicked);
      }

      if (memoryGame.pickedCards.length === 2) {
        setTimeout(function () {
          const firstCard = memoryGame.pickedCards[0];
          const secondCard = memoryGame.pickedCards[1];
          console.log(firstCard, secondCard);

          if (memoryGame.checkIfPair(firstCard.getAttribute("data-card-name"), secondCard.getAttribute("data-card-name"))) {
            firstCard.classList.add('blocked');
            secondCard.classList.add('blocked');
            memoryGame.pickedCards = [];
            document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed;
          } else {
            setTimeout(function () {
              firstCard.classList.remove('turned');
              secondCard.classList.remove('turned');
              memoryGame.pickedCards = [];
              document.getElementById("pairs-clicked").innerHTML = memoryGame.pairsClicked;
            }, 200);
          }
        }, 500)

      }
      if (memoryGame.checkIfFinished()) {
        if (memoryGame.pairsClicked === 12) {
          alert("You cheated, didn't you?!");
        }
        else if (memoryGame.pairsClicked > 12) {
          alert("Congratulations, you Won!!!");
        }
      }
    });

  });
});


