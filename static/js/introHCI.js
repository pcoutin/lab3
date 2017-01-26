'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

function projectClick(e) {
  e.preventDefault();
  $(this).css("background-color", "#7fff00");
  var projectTitle = $(this).find("p").text();
  var jumbotronHeader = $(".jumbotron h1");
  jumbotronHeader.text(projectTitle);
  var containingProject = $(this).closest(".project");
  var description = $(containingProject).find(".project-description");
  if (description.length == 0) {
    $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
  } else {
    $(description).toggle()
  }
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $("#testjs").click(function(e) {
    $('.jumbotron h1').text("make it stop");
    $('#testjs').text('Please wait...');
    $(".jumbotron p").toggleClass("active");
  });

  // Add any additional listeners here
  // example: $("#div-id").click(functionToCall);
  $("a.thumbnail").click(projectClick);
}

