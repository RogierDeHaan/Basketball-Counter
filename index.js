let homeScore = document.querySelector("#home-score")
let guestScore = document.querySelector("#guest-score")
let newGame = document.querySelector("#new-game")

let colorScoreHome = document.querySelector("#score-home")
let colorScoreGuest = document.querySelector("#score-guest")

let scoreHome = 0
let scoreGuest = 0

colorScoreHome.classList.add("blackborder")
colorScoreGuest.classList.add("blackborder")
newGame.classList.remove("click")   

// reset scores
newGame.addEventListener("click", () => {
    newGame.classList.add("click")   
    scoreHome = 0;
    scoreGuest = 0
    homeScore.textContent = scoreHome
    guestScore.textContent = scoreGuest    
    colorScoreHome.classList.remove("highlight")
    colorScoreGuest.classList.remove("highlight")
    colorScoreHome.classList.add("blackborder")
    colorScoreGuest.classList.add("blackborder")    
})

//set highlight on highest score

function setHighlight() {
    newGame.classList.remove("click")   
    if (scoreHome === scoreGuest){
        colorScoreHome.classList.add("blackborder")
        colorScoreGuest.classList.add("blackborder")
    }
    if (scoreHome > scoreGuest){
        colorScoreHome.classList.add("highlight")
        colorScoreHome.classList.remove("blackborder")
    }if (scoreGuest > scoreHome){
        colorScoreGuest.classList.remove("blackborder")
        colorScoreGuest.classList.add("highlight")
    }if (scoreHome < scoreGuest){
        colorScoreHome.classList.remove("highlight")
        colorScoreHome.classList.add("blackborder")
    }if (scoreGuest < scoreHome){
        colorScoreGuest.classList.remove("highlight")
        colorScoreGuest.classList.add("blackborder")
    }
}

// home score plus

function homePlus1() {
    scoreHome++
    homeScore.textContent = scoreHome
    setHighlight()
}
function homePlus2() {
    scoreHome += 2
    homeScore.textContent = scoreHome
    setHighlight()
}
function homePlus3() {
    scoreHome +=3
    homeScore.textContent = scoreHome
    setHighlight()
}

// guest score plus

function guestPlus1() {
    scoreGuest++
    guestScore.textContent = scoreGuest
    setHighlight()
}
function guestPlus2() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
    setHighlight()
}
function guestPlus3() {
    scoreGuest +=3
    guestScore.textContent = scoreGuest
    setHighlight()
}