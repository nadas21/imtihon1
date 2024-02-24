const email = document.querySelector(".email")
const password = document.querySelector(".password")
const form = document.querySelector(".form")

form.addEventListener("submit", function(evt) {
  evt.preventDefault()
  const emailValue = email.value
  const passwordValue = password.value

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue
    })
  })
  .then((res) => res.json())
  .then((data) => {
    if(data.token) {
      localStorage.setItem("token", data.token)
      location.replace("http://127.0.0.1:5500/api.html")
    } else {
      alert("iltimos royxatdan oting")
    }
  })
})

