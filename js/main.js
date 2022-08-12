const circles = document.querySelectorAll(".gameBoard div");
const message = document.getElementById("message");
const turnMessage = document.querySelector(".turn-message");
const currPlayer = document.getElementById("currPlayer");
const button = document.querySelector(".restartBtn");
button.addEventListener("click", restart);

let playerTurn = 1;

const winningCombos = [
  [7, 14, 21, 28],
  [1, 8, 15, 22],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [39, 31, 23, 15],
  [40, 32, 24, 16],
  [41, 33, 25, 17],
  [21, 15, 9, 3],
  [35, 29, 23, 17],
  [36, 30, 24, 18],
  [37, 31, 25, 19],
  [8, 15, 22, 29],
  [40, 39, 38, 37],
  [33, 32, 31, 30],
  [26, 25, 24, 23],
  [19, 18, 17, 16],
  [12, 11, 10, 9],
  [5, 4, 3, 2],
  [12, 18, 24, 30],
  [11, 17, 23, 29],
  [8, 16, 24, 32],
  [9, 17, 25, 33],
  [1, 9, 17, 25],
  [2, 10, 18, 26],
  [4, 10, 16, 22],
  [5, 11, 17, 23],
  [20, 26, 32, 38],
  [13, 19, 25, 31],
  [6, 12, 18, 24],
  [27, 19, 11, 3],
  [14, 22, 30, 38],
  [34, 26, 18, 10],
  [7, 15, 23, 31],
  [0, 8, 16, 24],
  [35, 28, 21, 14],
  [36, 29, 22, 15],
  [37, 30, 23, 16],
  [38, 31, 24, 17],
  [39, 32, 25, 18],
  [40, 33, 26, 19],
  [41, 34, 27, 20],
  [0, 7, 14, 21],
  [6, 5, 4, 3],
  [13, 12, 11, 10],
  [20, 19, 18, 17],
  [27, 26, 25, 24],
  [34, 33, 32, 31],
  [41, 40, 39, 38],
];

startGame();
function startGame() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", () => {
      if (
        circles[i + 7].classList.contains("filled") &&
        !circles[i].classList.contains("filled")
      ) {
        if (playerTurn == 1) {
          circles[i].classList.add("filled");
          circles[i].classList.add("player1");
          playerTurn = 2;
          currPlayer.innerHTML = playerTurn;
        } else if (playerTurn == 2) {
          circles[i].classList.add("filled");
          circles[i].classList.add("player2");
          playerTurn = 1;
          currPlayer.innerHTML = playerTurn;
        }
      }
      checkWinner();
    });
  }
}

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const circle1 = circles[winningCombos[i][0]];
    const circle2 = circles[winningCombos[i][1]];
    const circle3 = circles[winningCombos[i][2]];
    const circle4 = circles[winningCombos[i][3]];

    if (
      circle1.classList.contains("player1") &&
      circle2.classList.contains("player1") &&
      circle3.classList.contains("player1") &&
      circle4.classList.contains("player1")
    ) {
      turnMessage.innerHTML = "Player 1 Wins!";
      clicksEnd();
    } else if (
      circle1.classList.contains("player2") &&
      circle2.classList.contains("player2") &&
      circle3.classList.contains("player2") &&
      circle4.classList.contains("player2")
    ) {
      turnMessage.innerHTML = "Player 2 Wins!";
      clicksEnd();
    }
  }
}

function clicksEnd() {
  circles.forEach((circle) => {
    circle.classList.add("filled");
  });
}

function restart() {
  location.reload(true);
  startGame();
}