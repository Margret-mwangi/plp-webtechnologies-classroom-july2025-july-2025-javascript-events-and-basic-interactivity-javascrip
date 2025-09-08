// Toggle shower gel ingredients display
const showerGelBtn = document.getElementById("showerGelBtn");
const showerGelDetails = document.getElementById("showerGelDetails");

showerGelBtn.addEventListener("click", () => {
  if (showerGelDetails.style.display === "none") {
    showerGelDetails.style.display = "block";
    showerGelBtn.textContent = "Hide Ingredients";
  } else {
    showerGelDetails.style.display = "none";
    showerGelBtn.textContent = "Show Ingredients";
  }
});

// Toggle all-purpose soap ingredients display
const allPurposeBtn = document.getElementById("allPurposeBtn");
const allPurposeDetails = document.getElementById("allPurposeDetails");

allPurposeBtn.addEventListener("click", () => {
  if (allPurposeDetails.style.display === "none") {
    allPurposeDetails.style.display = "block";
    allPurposeBtn.textContent = "Hide Ingredients";
  } else {
    allPurposeDetails.style.display = "none";
    allPurposeBtn.textContent = "Show Ingredients";
  }
});

// Form validation for info request form
const infoForm = document.getElementById("infoForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const formSuccess = document.getElementById("formSuccess");

// Simple email format validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  formSuccess.textContent = "";
}

infoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  let valid = true;

  if (fullName.value.trim().length < 2) {
    nameError.textContent = "Please enter your full name (at least 2 characters).";
    valid = false;
  }

  if (!isValidEmail(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = "Thank you! We will contact you soon.";
    infoForm.reset();
  }
});
