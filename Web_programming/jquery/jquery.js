var i = 0;

$(document).ready(function () {
  $("div.out").mouseover(function () {
    $("div.out p:first").text("mouse over");
    $("div.out p:last").text(++i);
  });

  $("div.out").mouseout(function () {
    $("div.out p:first").text("mouse out");
  });

  $("#b1").on(
    "click",
    {
      url: "http://www.google.com",
      winattributes: "resize=1, scrollbars=1, status=1",
    },
    max_open
  );
});

function max_open(event) {
  var maxwindow = window.open(event.data.url, "", event.data.winattributes);
  maxwindow.moveTo(0, 0);
  maxwindow.resizeTo(screen.availWidth, screen.availHeight);
}
