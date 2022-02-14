document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'c1',
            img: 'img/char-1.png'
        },
        {
            name: 'c1',
            img: 'img/char-1.png'
        },
        {
            name: 'c2',
            img: 'img/char-2.png'
        },
        {
            name: 'c2',
            img: 'img/char-2.png'
        },
        {
            name: 'c3',
            img: 'img/char-3.png'
        },
        {
            name: 'c3',
            img: 'img/char-3.png'
        },
        {
            name: 'c4',
            img: 'img/char-4.png'
        },
        {
            name: 'c4',
            img: 'img/char-4.png'
        },
        {
            name: 'c5',
            img: 'img/char-5.png'
        },
        {
            name: 'c5',
            img: 'img/char-5.png'
        },
        {
            name: 'c6',
            img: 'img/char-6.png'
        },
        {
            name: 'c6',
            img: 'img/char-6.png'
        },
        {
            name: 'c7',
            img: 'img/char-7.png'
        },
        {
            name: 'c7',
            img: 'img/char-7.png'
        },
        {
            name: 'c8',
            img: 'img/char-8.png'
        },
        {
            name: 'c8',
            img: 'img/char-8.png'
        },
        {
            name: 'c9',
            img: 'img/char-9.png'
        },
        {
            name: 'c9',
            img: 'img/char-9.png'
        },
        {
            name: 'c10',
            img: 'img/char-10.png'
        },
        {
            name: 'c10',
            img: 'img/char-10.png'
        },
        {
            name: 'c11',
            img: 'img/char-11.png'
        },
        {
            name: 'c11',
            img: 'img/char-11.png'
        },
        {
            name: 'c12',
            img: 'img/char-12.png'
        },
        {
            name: 'c12',
            img: 'img/char-12.png'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/frontface.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/frontface.png')
        cards[optionTwoId].setAttribute('src', 'img/frontface.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'img/vit.png')
        cards[optionTwoId].setAttribute('src', 'img/vit.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'img/frontface.png')
        cards[optionTwoId].setAttribute('src', 'img/frontface.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  

    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 100)
      }
    }
  
    createBoard()
  })
  