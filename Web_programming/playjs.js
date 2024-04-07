function calc() {
  var a = document.getElementById("x");
  var b = document.getElementById("y");
  var s = document.getElementById("sum");
  s.value = Number(a.value) + Number(b.value);
}

var computerNumber = Math.floor(Math.random() * 100 + 1); //정답
var nGuesses = 0;

function Guess() {
  var result = "";
  nGuesses++;

  var a = parseInt(document.getElementById("user").value);

  if (a < computerNumber) {
    result = "낮습니다";
  } else if (a == computerNumber) {
    result = "정답입니다.";
  } else {
    result = "높습니다.";
  }
  document.getElementById("guess").value = nGuesses;
  document.getElementById("result").value = result;
  document.getElementById("random").value = computerNumber;
}
function replay() {
  nGuesses = 0;
  computerNumber = Math.floor(Math.random() * 100 + 1);
  document.getElementById("random").value = computerNumber;
  document.getElementById("guess").value = nGuesses;
  document.getElementById("result").value = "";
  document.getElementById("user").value = "";
}
