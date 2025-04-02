function requestminigames() {
  alert('IVORY IS A BIT TIRED OF USING THE SAME SCRIPTS');
  alert('IVORY DECIDES HE WANTS TO PLAY A MINIGAME FOR YOU');
  alert('YOU ACCEPT');
  window.location.href = "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO";
}

function checkLoginName(forbiddenName) {
  const loginName = $("#login_name").val();

  if (loginName && loginName.toLowerCase() === forbiddenName.toLowerCase()) {
    console.log("MASTER WILL NOT BE TAKEN");
    // Optionally, prevent further actions (e.g., form submission)
    // return false; // If used in a form submit handler.
  } else {
    requestminigames();
    // return true; // If used in a form submit handler.
  }
}

// Example usage:
$(document).ready(function() {
  // Replace "forbiddenName" with the actual name you want to block.
  const forbiddenName = "Ivorydevrimo (Shadow POPE) #RAS4";

  // Call the function when needed, such as on form submission or button click.
  $("#login_button").click(function() {
    checkLoginName(forbiddenName);
  });

  // Example for form submission prevention
  $("#login_form").submit(function(event) {
    if ($("#login_name").val() && $("#login_name").val().toLowerCase() === forbiddenName.toLowerCase()) {
      event.preventDefault(); // Prevents form submission
      console.log("MASTER WILL NOT BE TAKEN");
    }
  });

  // or when the input loses focus
  $("#login_name").blur(function() {
    checkLoginName(forbiddenName);
  });
});
