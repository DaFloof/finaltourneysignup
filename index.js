const button = document.querySelector(".signup")
const info = document.querySelector(".info")
const bracket = document.querySelector(".brackets")
const play = document.querySelector(".players")
const enter = document.querySelector(".submit")
const confirmed = document.querySelector(".entered")


button.addEventListener("click", () => {
    window.location="signup.html"
} )

bracket.addEventListener("click", () => {
    window.location="bracket.html"
})

info.addEventListener("click", () => {
    window.location="info.html"
})

play.addEventListener("click", () => {
    window.location="play.html"
})
confirmed.addEventListener("click", () => {
    console.log("Hello W");

})