$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var usernameInput = $("input#username").val();
    var dob = $("#born").val();
    var beverageInput = $("input#beverage").val();
    var favoriteColor = $("#color").val();
    var music = $("input:radio[name=music]:checked").val();


    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
