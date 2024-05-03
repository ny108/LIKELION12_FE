//window.onload = setCTime; //시계예제 setCTime은 onload가 됐을때 동작해라.
window.onload = pageLoad;
function pageLoad() {
  changeColor();
  setCTime(); //01

  var button1 = document.getElementById("sumButton"); //02
  button1.onclick = calc;

  var button2 = document.getElementById("guessButton"); //03
  button2.onclick = Guess;

  var button3 = document.getElementById("replayButton"); //04
  button3.onclick = replay;

  var button4 = document.getElementById("changeButton"); //05
  button4.onclick = changeImage;

  var button5 = document.getElementById("ctCreate"); //06
  button5.onclick = createColorTable;

  var button6 = document.getElementById("ctRemove"); //07
  button6.onclick = removeColorTable;

  var button7 = document.getElementById("stopColor"); //08
  button7.onclick = stopTextColor;

  var button8 = document.getElementById("mymove"); //09
  button8.onclick = myMove;

  var button9 = document.getElementById("guessbutton"); //10
  button9.onclick = guessLetter;

  var button10 = document.getElementById("newgameButton"); //11
  button10.onclick = newGame;
}

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
function setCTime() {
  var now = new Date();
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var s =
    monthNames[now.getMonth()] +
    " " +
    now.getDate() +
    ", " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds();
  document.getElementById("ctime").innerHTML = s;
  setTimeout(setCTime, 1000);
}
// Hangman------------------------------------------------------------------------------
var POSSIBLE_WORDS = [
  "obdurate",
  "verisimilitude",
  "defenestrate",
  "obsequious",
  "dissonant",
  "today",
  "idempotent",
];
var MAX_GUESSES = 6;
var guesses = "";
var guessCount = MAX_GUESSES;
var word;

function newGame() {
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guessCount = MAX_GUESSES;
  guesses = "";
  var guessButton = document.getElementById("guessbutton");
  guessButton.disabled = false;
  console.log(word);
  updatePage();
}

function updatePage() {
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if (guesses.indexOf(letter) >= 0) {
      clueString += letter + " ";
    } else {
      clueString += "_ ";
    }
  }
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;

  var guessArea = document.getElementById("guessstr");
  if (guessCount == 0) {
    guessArea.innerHTML = "You lose";
  } else if (clueString.indexOf("_") < 0) {
    guessArea.innerHTML = "You win!!!";
  } else {
    guessArea.innerHTML = "Guesses: " + guesses;
  }

  var image = document.getElementById("hangmanpic");
  image.src = "hangman" + guessCount + ".gif";
  document.getElementById("hguess").value = "";
}

function guessLetter() {
  var input = document.getElementById("hguess");
  var clue = document.getElementById("clue");
  var letter = input.value;

  if (
    guessCount == 0 ||
    clue.innerHTML.indexOf("_") < 0 ||
    guesses.indexOf(letter) >= 0
  ) {
    return;
  }
  guesses += letter;
  if (word.indexOf(letter) < 0) {
    guessCount--;
  }

  updatePage();
}

//이미지 요소 속성 바꾸기----------------------------------------------------------------------------
//var imgs = ["img1.jpg", "img2.jpg"];
function changeImage() {
  var bimg = document.getElementById("image");
  var sarray = bimg.src.split("/");
  var str = sarray[sarray.length - 1];
  if (str == "puppy1.jpeg") bimg.src = "puppy2.jpeg";
  else bimg.src = "puppy1.jpeg";

  //console.log(document.getElementById("image").src); //경로가 다 나옴. 주의
}
//색상 출력하기----------------------------------------------------------------------------------
var colorNames = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "purple",
  "fuchsia",
  "white",
  "lime",
  "green",
  "navy",
  "blue",
  "aqua",
  "teal",
  "black",
  "silver",
  "gray",
];

function createColorTable() {
  for (i = 0; i < colorNames.length; i++) {
    var node = document.createElement("div");
    node.innerText = colorNames[i];
    node.className = "ctbox";
    //node.setAttribute("class","ctbox"); //는 왜 안되는지..
    node.style.display = "inline-block";
    node.style.width = "60px";
    node.style.padding = "10px";
    node.style.backgroundColor = colorNames[i];
    document.getElementById("colorTable").appendChild(node);
  }
}
function removeColorTable() {
  var parent = document.getElementById("colorTable");
  var child = parent.getElementsByClassName("ctbox");

  for (var i = child.length - 1; i >= 0; i--) {
    //방법1
    //0부터하면 인덱스가 계속 변경되어 문제생김.
    parent.removeChild(child[i]);
  }
  //while (parent.hasChildNodes()) {
  // parent.removeChild(parent.firstChild);
  //}//방법2
  //parent.innerHTML = ""; //방법3
}

// 글자색 1초단위 바뀜, 중지 -------------------------------------------------------
var idd;
function changeColor() {
  idd = setInterval(flashText, 1000); //실행하는게 아니라 함수자체를 가지고 오는거라 괄호가 붙지않는다.
  function flashText() {
    var elem = document.getElementById("target");
    elem.style.color = elem.style.color == "red" ? "blue" : "red";
    elem.style.backgroundColor =
      elem.style.backgroundColor == "green" ? "yellow" : "green";
  }
}

function stopTextColor() {
  clearInterval(idd);
}

//상자이동 -------------------------------------------------------------------------
function myMove() {
  var box = document.getElementById("animate");
  var pos = 0;
  var id1 = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id1);
    } else {
      pos++;
      box.style.left = pos + "px";
      box.style.top = pos + "px";
    }
  }
}
