        // get the modal
        const modalWon = document.getElementById('modalWon');
        const modalLost = document.getElementById('modalLost');
        const modalLostButContinue = document.getElementById('modalLostButContinue');

        // defines user score show
        let userScoreSpan = document.querySelector('.userScore');

        // defines user score
        let userScore = 0;

        // defines computer score show
        let computerScoreSpan = document.querySelector('.computerScore');

        // defies computer score
        let computerScore = 0;

        // this variable is used if the user loses game
        let youLost = 0;

        //defines image win/lost/draw to show
        const whoWon = document.getElementById('whoWon');
        // console.log({whoWon})

        // makes array from all .rpsImage clall - takes all pictures
        const choices = document.querySelectorAll('.rpsImage');
        // console.log('all images are: ', choices);

        // defines user choice that will work further
        let userChoice;
        // defines computer choice that will work further
        let computerChoice;

        // defines user image to show
        const userImage = document.getElementById('userChoiceImg');     
        
        // defines computer image to show
        const computerImage = document.getElementById('computerChoiceImg');

        // defines whole container with game
        const rpsContainer = document.querySelector('.rockPaperScissorsContainer');

        // // defines wrapper that fades when game starts
        // const wrapperContent = document.querySelector('.slide-wrapper-content');

        // defines the div that doesn't allow to click when the turn runs
        const cantClickDiv = document.querySelector('.cantClick');

        function runRPS(wrapperContent){
            rpsContainer.style.display = "block";
            rpsContainer.animate([
                {opacity: 1,},
            ],  {
                duration: 1000,
                iterations: 1,
                fill: 'forwards'})            

            wrapperContent.animate([
                {opacity: 0,},
            ],  {
                duration: 500,
                iterations: 1,
                fill: 'forwards'})
        }

        // takes el1 .. elN from choices array
        choices.forEach(function (possibleChoice){
            // makes evenlistener to 
            possibleChoice.addEventListener('click', function run (element) {
                if (userImage.src != './media/pictures/rock.png' || computerImage.src != './media/pictures/rock.png'){
                    userImage.src = './media/pictures/rock.png';
                    computerImage.src = './media/pictures/rock.png';
                }
                if (whoWon.style.backgroundImage != null){
                    opacityFade();
                }

                cantClick();

                animate();
                //runs user choice and image show func with delay of 1sec
                setTimeout(showUserChoice, 1800, element);
                //runs computer choice and image show func with delay of 1sec                
                setTimeout(generateComputerChoice, 1800);
                //runs compare function with delay of 1.1 sec
                setTimeout(compare, 1900);
            })
        })

        // function to animate the movement of default rock
        function animate() {
            userImage.animate([
                {transform: 'translateY(-50px) rotate(90deg)'},
            ],  {
                duration: 300,
                iterations: 6,
                direction: 'alternate'})

            computerImage.animate([
                {transform: 'translateY(-50px) scaleX(-1) rotate(90deg)'},
            ],  {
                duration: 300,
                iterations: 6,
                direction: 'alternate'})
        }

        function showUserChoice (element){
            // sets userchoice to pressed image's ID
            userChoice = element.target.id;
            userImage.src = element.target.src;
            // console.log('user image is: ', userImage);
            console.log('user choice is: ' + userChoice);
        }

        function generateComputerChoice(){
            // generates random number 0-2
            const randomNumber = Math.floor(Math.random() * choices.length);
            // adds id from array to computer choice
            computerChoice = choices[randomNumber].id;
            console.log('computer choice is: ' + computerChoice);
            computerImage.src = choices[randomNumber].src;
        }

        // function to compare user and computer choices
        function compare(){
            // checks if user choice is equal to computer choice
            if (userChoice == computerChoice){
                console.log('the result is: draw');
                // adds result to screen
                whoWon.style.backgroundImage = "url('./media/pictures/draw.png')";
                opacityChange();
            } else {
                // if choices are not equal, those are being compared and the winner is being determined
                // score is incremented
                switch (userChoice + computerChoice){
                    case 'rockscissors':
                    case 'paperrock':
                    case 'scissorspaper':
                        console.log('you win');
                        userScore++;
                        // adds result to screen
                        whoWon.style.backgroundImage = "url('./media/pictures/you-win.png')";
                        opacityChange();
                        break;
                    case 'rockpaper':
                    case 'paperscissors':
                    case 'scissorsrock':
                        console.log('you lost');
                        computerScore++;
                        // adds result to screen
                        whoWon.style.backgroundImage = "url('./media/pictures/you-lost.png')";
                        opacityChange();
                        break;
                }
            }
            console.log('user score is: ', userScore);
            userScoreSpan.innerHTML = userScore;
            console.log('computer score is: ', computerScore);
            computerScoreSpan.innerHTML = computerScore;

            if (userScore == 10){
                modalWon.style.display = 'flex';
            }
            if (computerScore == 1){
                youLost++;
                if (youLost == 1){
                    modalLost.style.display = 'flex';
                }
                if (youLost == 2){
                    modalLostButContinue.style.display = 'flex';
                }

            }
        }

        function opacityChange(){
            whoWon.animate([
                {opacity: 1,},
            ],  {
                duration: 250,
                iterations: 1,
                fill: 'forwards'})

            
        }

        function opacityFade(){
            whoWon.animate([
                {opacity: 0,},
            ],  {
                duration: 150,
                iterations: 1,
                fill: 'forwards'})
        }

        function restart () {
            userScore = 0;
            userScoreSpan.innerHTML = userScore;
            computerScore = 0;
            computerScoreSpan.innerHTML = computerScore;
            modalLost.style.display = 'none';
            modalWon.style.display = 'none';
            modalLostButContinue.style.display = 'none';
        }

        function cantClick (){
            cantClickDiv.style.display = 'block';
            setTimeout(function(){
                cantClickDiv.style.display = 'none'
            }, 2150);
        }