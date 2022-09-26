const navBarBtn = document.getElementById("burger-icon")
const navBar = document.getElementById("nav-bar")
const signUpBtn = document.getElementById("sign-up")
const signUpForm = document.getElementById("sign-up-form")
const overlay = document.getElementById("overlay")
const closeFormBtn = document.getElementById("close-form")

// Event Listeners
navBarBtn.addEventListener("click", () => navBar.classList.toggle("show"))
signUpBtn.addEventListener("click", showSignUpForm)
closeFormBtn.addEventListener("click", closeForm)
overlay.addEventListener("click", closeForm)

// show sign up form
function showSignUpForm() {
    signUpForm.classList.toggle("show")
    overlay.style.visibility = "visible"
}

// close form
function closeForm() {
    signUpForm.classList.toggle("show")
    overlay.style.visibility = "hidden"
}