$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("Try again");
  });

  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $("img").click(function() {
    alert("This is a paragraph.");
  });
});

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});
