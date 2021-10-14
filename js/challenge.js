// DOM elements

const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const commentForm = document.getElementsByTagName("form")

// Counter

let intervalId;
let intervalRunning;

function initCounter() {
    if (!intervalId) {
        intervalId = setInterval(startCounter, 1000);
        intervalRunning = true
    }
}

function startCounter() {
    const currentNum = parseInt(counter.innerText)
    counter.innerText = currentNum + 1
}

//Pause and resume counter

pause.addEventListener("click", () => {
    if (!!intervalRunning) {
        clearInterval(intervalId);
        intervalId = null;
        intervalRunning = false;
        pause.innerText = "resume"
        disableButtons()
    } else {
        console.log("start running")
        initCounter()
        pause.innerText = "pause"
    }
})

initCounter();

// Disable buttons when pause button is clicked
function disableButtons() {
    const buttons = document.querySelectorAll("button")
    console.log(buttons)
}

// Plus and minus buttons

plus.addEventListener("click", () => {
    const currentNum = parseInt(counter.innerText)
    counter.innerText = currentNum + 1
})

minus.addEventListener("click", () => {
    const currentNum = parseInt(counter.innerText)
    counter.innerText = currentNum - 1
})

// Heart button

heart.addEventListener("click", () => {
    // if a number hasn't been liked, appendchild to comments with interpolated string "has been liked x number of times"
    // if a number has been liked, each click event increases number of likes to interpolated string
    // the number that is liked and the number of likes are both variables
    const currentNum = parseInt(counter.innerText)
    const currentLi = document.getElementById(`${currentNum}`)
    if (currentLi) {
        //create array from string, isolate 3rd item, then set numoflikes to equal that index
        // then add 1 when interpolate
        let htmlArray;
        currentLi.innerHTML
        let numberOfLikes;
        currentLi.innerHTML = `${currentNum} has ${numberOfLikes} likes`
        console.log(htmlArray)
    } else {
        let numberOfLikes = 1;
        const likesList = document.querySelector(".likes")
        const newLi = document.createElement("li")
        newLi.innerHTML = `${currentNum} has ${numberOfLikes} likes`
        newLi.id = currentNum
        likesList.appendChild(newLi)
    }

    // Assign HTML ID of currenNum to Li
    // How do we call Li to see if it exists? 
    // if ()

})



// Comment