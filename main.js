// Pizza Order by Mr. V

// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

function placeOrder() {
  let member = document.getElementById("member").value;
  let noun = document.getElementById("noun").value;
  let action = document.getElementById("action").value;

  let msg = `My ${member} loves to eat ${noun} and then ${action}.`;

  document.getElementById("output").innerHTML = msg;
}
