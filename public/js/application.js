$(document).ready(function() {
  $('#submit-term').on("submit", function() {
    event.preventDefault();
    console.log("YAY");

    var $form = $(this);
    var term = $form.serialize();

    var request = $.ajax({
      url : $form.attr("action"),
      type : $form.attr("method"),
      data : term
    });

    request.done(function(response){
      console.log("HELLO");
      console.log(JSON.parse(response));

    });


  });
});
