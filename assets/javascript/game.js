$(document).ready(function() {
$('input').on('keydown', function(e) {
let x = e.keycode;
console.log(x)
});

//   // Notice I didn't set $(".jumbotron") to a var this time?
//   // If you only plan to use that selector once it doesn't need to be a var
//   $("#random-button").on("click", function() {

//     // ... we generate a random number
//     var random = Math.floor(Math.random() * 1000) + 1;

//     // ... and then dump the random number into our random-number div.
//     $("#random-number").text(random);

//   });

});