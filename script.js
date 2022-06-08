let board = document.querySelector(".board");
let modal = document.querySelector(".modal");
let playAgain = document.querySelector(".playagain");
let title2 = document.querySelector(".title2");
let text = document.querySelector(".text");
let beep = document.querySelector(".beep");
let ties = document.querySelector(".tie");
let wins = document.querySelector(".win");

for (let i = 1; i < 10; i++) {
  let span = document.createElement("span");
  span.classList.add("squares");
  board.appendChild(span);
}
let trigger = true;
let activePlayer = "O";
function switchPlayers() {
  trigger = !trigger;
  trigger === true ? (activePlayer = "O") : (activePlayer = "X");
}

let squares = document.querySelectorAll(".squares");

squares.forEach((square) => {
  square.addEventListener("click", function player() {
    beep.play();
    switchPlayers();
    square.innerHTML = activePlayer;
    let win = [
      [squares[0].innerHTML, squares[1].innerHTML, squares[2].innerHTML],
      [squares[3].innerHTML, squares[4].innerHTML, squares[5].innerHTML],
      [squares[6].innerHTML, squares[7].innerHTML, squares[8].innerHTML],
      [squares[0].innerHTML, squares[3].innerHTML, squares[6].innerHTML],
      [squares[1].innerHTML, squares[4].innerHTML, squares[7].innerHTML],
      [squares[2].innerHTML, squares[5].innerHTML, squares[8].innerHTML],
      [squares[0].innerHTML, squares[4].innerHTML, squares[8].innerHTML],
      [squares[2].innerHTML, squares[4].innerHTML, squares[6].innerHTML],
    ];

    function resetGame() {
      location.reload();
    }
    function showModal(string, string2) {
      modal.style.display = "flex";
      title2.innerHTML = string;
      text.innerHTML = string2;
      playAgain.addEventListener("click", function () {
        modal.classList.add("modal2");
        resetGame();
        setTimeout(function () {
          modal.classList.remove("modal2");
          modal.style.display = "none";
        }, 600);
      });
    }
    function checkWinner(arr) {
      if (
        (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||
        (arr[0] === "O" && arr[1] === "O" && arr[2] === "O")
      ) {
        showModal("Congratulations!", `The winner is ${activePlayer}`);
        wins.play();
      }
    }
    for (let i = 0; i < win.length; i++) {
      checkWinner(win[i]);
    }
    if (
      squares[0].textContent !== "" &&
      squares[1].textContent !== "" &&
      squares[2].textContent !== "" &&
      squares[3].textContent !== "" &&
      squares[4].textContent !== "" &&
      squares[5].textContent !== "" &&
      squares[6].textContent !== "" &&
      squares[7].textContent !== "" &&
      squares[8].textContent !== ""
    ) {
      checkDraw(win);
    }
    function checkDraw(array) {
      let result1 = new Set(array[0]).size === 2;
      let result2 = new Set(array[1]).size === 2;
      let result3 = new Set(array[2]).size === 2;
      let result4 = new Set(array[3]).size === 2;
      let result5 = new Set(array[4]).size === 2;
      let result6 = new Set(array[5]).size === 2;
      let result7 = new Set(array[6]).size === 2;
      let result8 = new Set(array[7]).size === 2;

      if (
        result1 === true &&
        result2 === true &&
        result3 === true &&
        result4 === true &&
        result5 === true &&
        result6 === true &&
        result7 === true &&
        result8 === true
      ) {
        showModal("Oh shoot!", `It's draw!`);
        ties.play();
      }
    }
    if (square.innerHTML === "X" || square.innerHTML === "O") {
      square.removeEventListener("click", player);
    }
  });
});
