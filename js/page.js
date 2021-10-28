function initialPick() {
    var initial = "img/mystery.svg";
    document.getElementById('o-img').src = initial;
}

sessionStorage("playerScore", 0);
function playerTracker() {
  var win = Number(sessionStorage.getItem('playerScore')) + 1;
  document.getElementById('pscore').innerHTML = win;
  sessionStorage.setItem('playerScore', win);
}

sessionStorage("oppScore", 0);
function oppTracker() {
  var loss = Number(sessionStorage.getItem('oppScore')) + 1;
  document.getElementById('oscore').innerHTML = loss;
  sessionStorage.setItem('oppScore', loss);
}

sessionStorage("total", 0)
function gameTracker() {
  var total = Number(sessionStorage.getItem('total')) + 1;
  document.getElementById('gameTotal').innerHTML = total;
  sessionStorage.setItem('total', total);
}

function rockPick() {
    function genOppPick() {
      if (Math.floor(Math.random() * 3) == 2) {
        var choice = "img/rock.svg";
      } else if (Math.floor(Math.random() * 3) == 1) {
        var choice = "img/paper.svg";
      } else {
        var choice = "img/scissors.svg";
      }
      document.getElementById('o-img').src = choice;
      if (choice == "img/rock.svg") {
        document.getElementById('result').innerHTML = "It's a Tie";
        gameTracker();
      } else if (choice == "img/paper.svg") {
        document.getElementById('result').innerHTML = "You Lose";
        oppTracker();
        gameTracker();
      } else {
        document.getElementById('result').innerHTML = "You Win!";
        playerTracker();
        gameTracker();
      }
    }
    genOppPick();
}

function paperPick() {
  function genOppPick() {
    if (Math.floor(Math.random() * 3) == 2) {
      var choice = "img/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var choice = "img/paper.svg";
    } else {
      var choice = "img/scissors.svg";
    }
    document.getElementById('o-img').src = choice;
    if (choice == "img/rock.svg") {
      document.getElementById('result').innerHTML = "You Win!";
      playerTracker();
      gameTracker();
    } else if (choice == "img/paper.svg") {
      document.getElementById('result').innerHTML = "It's a Tie";
      gameTracker();
    } else {
      document.getElementById('result').innerHTML = "You Lose";
      oppTracker();
      gameTracker();
    }
  }
  genOppPick();
}

function scissorsPick() {
  function genOppPick() {
    if (Math.floor(Math.random() * 3) == 2) {
      var choice = "img/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var choice = "img/paper.svg";
    } else {
      var choice = "img/scissors.svg";
    }
    document.getElementById('o-img').src = choice;
    if (choice == "img/rock.svg") {
      document.getElementById('result').innerHTML = "You Lose";
      oppTracker();
      gameTracker();
    } else if (choice == "img/paper.svg") {
      document.getElementById('result').innerHTML = "You Win!";
      playerTracker();
      gameTracker();
    } else {
      document.getElementById('result').innerHTML = "It's a Tie";
      gameTracker();
    }
  }
  genOppPick();
}