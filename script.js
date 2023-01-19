const emailInput = document.querySelector(".mail-input");
const btn = document.querySelector(".btn");
const errorText = document.querySelector(".error-message");
const errorImg = document.querySelector(".error-img");
const errors = document.querySelectorAll(".error");

btn.disabled = true;

emailInput.addEventListener("blur", () => {
  if (
    emailInput.value.length === 0 ||
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)
  ) {
    errors.forEach((error) => {
      error.style.display = "block";
    });
  } else {
    errors.forEach((error) => {
      error.style.display = "none";
    });
    btn.disabled = false;
  }
});
