$(document).ready(function() {
  createBubble();
});

var createBubble = function(){

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
      var newBubble = new Bubble(info.name, info.value);
      bubbles.push(newBubble);
      $('.data').append("<li>" + info.name + " has a total retweet value of: " + "<em>" + info.value + "</em></li>" );;
    });
  });
}
