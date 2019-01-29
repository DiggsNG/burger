// Make sure we wait to attach our handlers until the DOM is fully loaded.
//Send update burger devour request. Interfaces with HTML and burger controller.
$(function () {
  $(".update-devour").on("click", function (event) {
      var id = $(this).data("id");

      var newDevourState = {
          devoured: true
      }
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
      }).then(
          function () {
              console.log("changed devour to", true);
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });
        //Submit new burger request
      $("#submit").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
          burger_name: $("#name").val().trim(),
          devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });
  