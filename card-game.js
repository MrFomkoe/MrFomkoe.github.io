let memoryGameContainer = document.querySelector('.memoryGameContainer')

// defines button so it could be hidden by script
let gameStartButton = document.getElementById('gameStartButton');

// defines theme for game
// let battleMusic = document.getElementById('battleMusic');

// defines hit sound
let hitSound = document.getElementById('hitSound');
// defines kill sound
let killSound = document.getElementById('killSound');


// defines game table where cards are placed
let gameTable = document.getElementById('gameFieldContainer');

let hitEffect = document.getElementById('hitImage');

// defines player health
let playerHealth = 6;
let playerHealthClass = 'playerHealthClass';
let playerHealthImages;
const playerHealthBar = document.getElementById('playerHealthBar');

// defines the computer health
let computerHealth;
let computerHealthClass = 'computerHealthClass';
let computerHealthImages;
const computerHealthBar = document.getElementById('computerHealthBar');

// defines the 'back' of the card
let cardBack = './media/pictures/arcana-cards/back.png';

// defines main array with all cards
const gameCards = [
    {
        name: 'devil',
        image: './media/pictures/arcana-cards/devil.png'
    },
    {
        name: 'emperor',
        image: './media/pictures/arcana-cards/emperor.png'
    },
    {
        name: 'judgement',
        image: './media/pictures/arcana-cards/judgement.png'
    },
    {
        name: 'magician',
        image: './media/pictures/arcana-cards/magician.png'
    },
    {
        name: 'star',
        image: './media/pictures/arcana-cards/star.png'
    },
    {
        name: 'tower',
        image: './media/pictures/arcana-cards/tower.png'
    },    
]

// function to start game
function startGame(){
    // hides start button
    gameStartButton.style.display = 'none';

    // dublicates the deck so the cards would have pairs
    const fullDeck = [...gameCards];
    fullDeck.push(...gameCards);

    console.log('cards are: ', gameCards);
    console.log('full deck is: ', fullDeck);

    // sets the computer health, which is unique card amount
    computerHealth = gameCards.length;

    // appends health bar to html document
    addHearts(computerHealth, computerHealthBar, computerHealthClass);
    addHearts(playerHealth, playerHealthBar, playerHealthClass);
    computerHealthImages = document.querySelectorAll('.computerHealthClass');
    playerHealthImages = document.querySelectorAll('.playerHealthClass');

    // starts function to shuffle dublicated array
    shuffleArray(fullDeck);
    // starts function to create the table with cards
    createGameField(fullDeck);

    // starts function to hide cards and then pick the first card
    setTimeout(hideCards, 3000);
}

function addHearts(health, bar, classAdded){
    for (let i=0; i<health; i++){
        let element = document.createElement('img');
        element.src = './media/pictures/arcana-cards/heart.png';
        element.style.height = '50px';
        element.className = `heart ${classAdded}`;
        // element.classList.add = classAdded;
        bar.appendChild(element);
        // console.log(element);
    }
}

//  Fisher-Yates Algorithm to shuffle the deck
function shuffleArray(deck){
    for(let i = deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    // console.log('shuffled array is: ', deck);
}

// function to create the game field. By default it is 3 rows x 4 columns (possibly will make difficulties later)
function createGameField (fullDeck){
    // general array with game field
    const gameField = new Array();

    let arrayRows = 3;
    let arrayColumns = 4;

    // create arrays in array
    for (let i=0; i<arrayRows; i++){
        gameField[i] = new Array();
    }
    // the index number for array with cards
    let a = 0;

        // filling rows
        for (let i=0; i<arrayRows; i++){
            // filling columns
            for (let j=0; j<arrayColumns; j++){
                    gameField[i][j] = fullDeck[a];
                    a++;
            }
        }
    // function that 
    createTable(gameField);
}

// function to print the gamefield to HTML document
function createTable(gameField){
    // creatres html table
    let html = "<table cellpadding='20'>";
        for (i=0; i<gameField.length; i++)
        {
            html += "<tr>";
            for(j=0; j<gameField[i].length; j++)
            {
                html += `<td> <img class="${gameField[i][j].name} card" src=${gameField[i][j].image} height="150"> </td>`;
            }
            html += "</tr>";
        }
        html += "</table>";

        //html element is pushed in div where the game is placed
        gameTable.innerHTML = html;
}

function hideCards(){
    // creates an array from all table elements
    const cardToChose = document.querySelectorAll('.card');

    // method to hide all cards
    cardToChose.forEach(function (element){
        flipCardBack(element);
        setTimeout(function(){
            // changes picture to 'back' of the card
            element.src = cardBack;
            // adds class to all cards, it will be needed later to make a check if the card is 'faced'
            element.classList.add('hidden');
        }, 75, element);

        // console.log(element)
    })

    // function to chose the first card
    pickCardOne(cardToChose);
}

function flipCardBack(card){
    if (card.classList.contains('flippedFront')){
        card.classList.remove('flippedFront');
    }
    card.classList.add('flippedBack');
}

function flipCardFront(card){
    if (card.classList.contains('flippedBack')){
        card.classList.remove('flippedBack');
    }
    card.classList.add('flippedFront');
}

// function to pick the first card
function pickCardOne(cardToChose){

    // for each table element creates event listener
    cardToChose.forEach(function (chosenCard){
            chosenCard.addEventListener('click', cardOne);
    })

    // works with the chosen card
    function cardOne(element){
        // this conditional allows to choose only cards that are are hidden
        if (element.target.classList.contains('hidden')){
            element.target.classList.remove('hidden');
            // defines the choice that user made
            let cardOneChoice = element.target;
            // paints the chosen card 'black'
            // cardOneChoice.style.background = 'black';
            flipCardFront(cardOneChoice);

                setTimeout(function(){
                    // checkes the array with all cards and takes the needed src
                    cardOneChoice.src = gameCards.find(function (e){
                        return e.name === cardOneChoice.classList.item(0);
                    }).image;
                    console.log('card one choice is: ', cardOneChoice);
                }, 75);
            
            // removes event listener so 'first card' can't be chosen again
            cardToChose.forEach(function (chosenCard){
                chosenCard.removeEventListener('click', cardOne);
            })
        // starts function to pich the second card
        pickCardTwo(cardToChose, cardOneChoice);            
        }
    }
}

// function to pich the second card
function pickCardTwo(cardToChose, cardOneChoice){
    // again for each table element creates event listener
    cardToChose.forEach(function (chosenCard){
        chosenCard.addEventListener('click', cardTwo);
    })

    // works with the chosen card
    function cardTwo(element){

        // doen't allow the player to choice the card chosen as first
        if (element.target == cardOneChoice){
            console.log('can`t take this one');
        } else {
            // checks if the card is hidden
            if (element.target.classList.contains('hidden')){
            element.target.classList.remove('hidden');
                // if the card is not the same as the first one defines second card
                let cardTwoChoice = element.target;
                // paints it yellow
                // cardTwoChoice.style.background = 'yellow';
                flipCardFront(cardTwoChoice);

                    setTimeout(function(){
                        // checkes the array with all cards and takes the needed src
                        cardTwoChoice.src = gameCards.find(function (e){
                            return e.name === cardTwoChoice.classList.item(0);
                        }).image;

                        console.log('card two choice is: ', cardTwoChoice);
                    }, 75);

                // removes possibilty to click on cards
                cardToChose.forEach(function (chosenCard){
                    chosenCard.removeEventListener('click', cardTwo);
                })

                // starts function to compare card one and card two
                compareCards(cardOneChoice, cardTwoChoice, cardToChose);
            }
        }
    }
}

// function to compare cards
function compareCards (one, two, cardToChose){
    // if the cards have the same class, that is whether the cards with similar picture
    if (one.className == two.className){
        console.log('same cards');

        // lowers computer health
        computerHealth--;
        removeHeart(computerHealth, computerHealthImages);
        setTimeout(showHitEffect, 200);
        console.log('computer health is: ', computerHealth);
        setTimeout(function(){
            if (computerHealth == 0){
                alert('you won');
            }
        }, 500);

        // restars the possibilty to choose the first card in a turn
        pickCardOne(cardToChose);
    } else {
        // if the cards are not simiral
        setTimeout(function () {
            console.log('wrong cards')
            let bothCards = [one, two];
            bothCards.forEach(function (element){
                flipCardBack(element)});

                setTimeout(function(){
                    // one.style.background = 'none';
                    // two.style.background = 'none';
                    one.classList.add('hidden');
                    two.classList.add('hidden');
                    one.src = cardBack;
                    two.src = cardBack;
                    pickCardOne(cardToChose);     
                }, 75);
            
            playerHealth--;
            removeHeart(playerHealth, playerHealthImages);
            setTimeout(showHitEffect, 200);
            setTimeout(function(){
                if (playerHealth == 0){
                    alert('you lost');
                }
            }, 500);

        }, 1000);

        console.log('player health is: ', playerHealth);
    }
}

function showHitEffect(){
    if (playerHealth == 0 || computerHealth == 0){
        killSound.play();
    } else {
        hitSound.play();
    }
    
    hitEffect.style.display = 'block';
    hitEffect.animate([
        {transform: 'scale(0.5)', opacity: 0.5},
        {transform: 'scale(1)', opacity: 1},       
        {transform: 'scale(0.8)', opacity: 0.8},
    ],  {
        duration: 200,
        iterations: 1,
    });
    setTimeout(() => {
        hitEffect.style.display = 'none';        
    }, 200);
}

function removeHeart(health, images){
    images[health].animate([
        {transform: 'scale(0.95)', opacity: 0.8},
        {transform: 'scale(0.85)', opacity: 0.4},
    ],  {
        duration: 300,
        iterations: 5,
        direction: 'alternate',
        fill: 'forwards'
    });
    // images[health].classList.add('fadedHeart');
    // console.log('current heart is', images[health])
}