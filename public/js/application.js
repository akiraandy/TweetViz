$(document).ready(function() {
  $('#submit-term').on("submit", function() {
    event.preventDefault();


    var $form = $(this);
    var term = $form.serialize();

    var request = $.ajax({
      url : $form.attr("action"),
      type : $form.attr("method"),
      data : term
    });

    request.done(function(response){
      var info = JSON.parse(response);
      var newBubble = new Bubble(50);
      bubbles.push(newBubble);
      console.log("Hello");
    });


  });
});
