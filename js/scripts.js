$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("img").click(function() {
    alert("This is a paragraph.");
  });
});