$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var favThings = ["iceCream", "armor", "quilt", "candyBar"]
    favThings.forEach(function(favThing) {
      var userInput = $("input#" + favThing).val();
      $("." + favThing).text(userInput);

    });
    var practice = [
      $("input#iceCream").val(),
      $("input#armor").val(),
      $("input#quilt").val(),
      $("input#candyBar").val()
    ];
    console.log(practice);



    event.preventDefault();

  });

});
