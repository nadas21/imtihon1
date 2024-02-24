const getToken = localStorage.getItem("token")
const logOut = document.querySelector(".log-out")
const overlay = document.querySelector(".overlay")
const elOpen = document.querySelector(".btn5")
const elClose = document.querySelector(".close")
const elModal = document.querySelector(".modal")
const elRead = document.querySelector(".btnl1")
if(!getToken) {
  location.replace("http://127.0.0.1:5500/login.html")
}

logOut.addEventListener("click", function(evt) {
  evt.preventDefault()

  localStorage.removeItem("token")
  location.reload()
})


//////////////////////////// boshqa
elOpen.addEventListener("click", function(evt){
  evt.preventDefault()

  elModal.classList.remove("hidden")
  overlay.classList.remove("hidden")

})
elRead.addEventListener("click", function(evt){
  evt.preventDefault()

  elModal.classList.add("hidden")
  overlay.classList.add("hidden")

})

elClose.addEventListener("click", function(evt){
  evt.preventDefault()

  elModal.classList.add("hidden")
  overlay.classList.add("hidden")

})

overlay.addEventListener("click", function(evt){
  evt.preventDefault()

  elModal.classList.add("hidden")
  overlay.classList.add("hidden")

})
document.addEventListener("keydown", function(evt) {
  if(evt.key === "Escape") {
    elModal.classList.add("hidden")
    overlay.classList.add("hidden")
  }
})




///////////

