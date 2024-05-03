//202111248 김나영

function showColor() {
  var cd = document.getElementsByClassName("colorDiv");

  for (var i = 0; i < cd.length; i++) {
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);

    cd[i].innerHTML = "rgb(" + r + "," + g + "," + b + ")";
    var bgcolor = `rgb(${r},${g},${b})`;
    cd[i].style.backgroundColor = bgcolor;
  }
}
