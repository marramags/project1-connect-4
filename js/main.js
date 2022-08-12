// alert('I can do this!')
const circles = document.querySelectorAll('.gameBoard div');
const message = document.getElementById('message');
const currPlayer = document.getElementById('currPlayer')
let playerTurn = 1;

const winningCombos =[
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29,],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 25],
    [10, 17, 25, 31],
    [17, 25, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],

    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],

    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],

    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],

    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],

    [14, 22, 30, 38],
    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [0, 8, 16, 24],
    [16, 24, 32, 40],
    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [2, 10, 18, 26, 34],
    [10, 18, 26, 34],
    [3, 11, 19, 27],


]


function checkWinner() {
    winningCombos.forEach((space, idx) => {
        const circle1 = circles[space,[idx]]
        console.log(circle1)

    })
    for (let i = 0; i < winningCombos.length; i++){
        const circle1 = circles[winningCombos[i][0]]
        console.log(circle1)
        const circle2 = circles[winningCombos[i][1]]
        const circle3 = circles[winningCombos[i][2]]
        const circle4 = circles[winningCombos[i][3]]

        if (circle1.classList.contains('player1') && circle2.classList.contains('player1') && circle3.classList.contains('player1') && circle4.classList.contains('player1')) {
            message.innerHTML = "Winner: Player 1!"
        } else if (circle1.classList.contains('player2') && circle2.classList.contains('player2') && circle3.classList.contains('player2') && circle4.classList.contains('player2')){
            message.innerHTML = "Winner: Player 2!"
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
