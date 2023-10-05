//Toggle for password visible
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleCheckbox = document.getElementById('toggleCheckbox');
  
  if (toggleCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}
//Next Form
function nextForm() {
  event.preventDefault();
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form2').style.display = 'block';
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var button = document.getElementsByClassName("ok-btn")[0];

// Function to display the modal
function showModal(event) {
  event.preventDefault();
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Redirect to homepage when OK button is clicked
button.addEventListener("click", function(event) {
  closeModal();
  window.location.href = "login.html";
  setTimeout(showModal, 4000);
  event.stopPropagation(); // Prevent event propagation
});