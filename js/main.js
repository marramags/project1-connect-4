// alert('I can do this!')
const circles = document.querySelectorAll('.gameBoard div');
const message = document.getElementById('results');
const currPlayer = document.getElementById('currPlayer')
let playerTurn = 1;

const winningCombos =[

]


function checkWinner() {
    // winningCombos.forEach(space => {
    //     const circle1 = circles[winningCombos[space][0]
    //     ]
    // })
    for (let i = 0; i < winningCombos.length; i++){
        const circle1 = circles[winningCombos[i][0]]
        const circle2 = circles[winningCombos[i][1]]
        const circle3 = circles[winningCombos[i][2]]
        const circle4 = circles[winningCombos[i][3]]

        if (circle1.classList.contains('player1') && circle2.classList.contains('player1') && circle3.classList.contains('player1') && circle4.classList.contains('player1')) {
            message.innerHTML
        }
    }
}



for (let i = 0; i < circles.length; i++){
        circles[i].addEventListener('click', () => {
        if (circles[i +7].classList.contains('filled') && !circles[i].classList.contains('filled')) {
            if (playerTurn == 1) {
                circles[i].classList.add('filled')
                circles[i].classList.add('player1')
                playerTurn = 2
                currPlayer.innerHTML = playerTurn
            } else if (playerTurn == 2) {
                circles[i].classList.add('filled')
                circles[i].classList.add('player2')
                playerTurn = 1
                currPlayer.innerHTML = playerTurn
            }
         } else
            message.innerHTML = "nope"
            checkWinner()   
        }) 
        
    };
