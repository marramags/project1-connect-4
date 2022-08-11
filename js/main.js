// alert('I can do this!')
const circles = document.querySelectorAll('.gameBoard div');
const results = document.getElementById('results');
const currPlayer = document.getElementById('currPlayer')
let playerTurn = 1;

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', () => {
        if (circles[i +7].classList.contains('.filled') && !circles[i].classList.contains('.filled'))
            if (playerTurn == 1) {
                
            }
    })
}