// DOM elements

const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const formInput = document.querySelector("#comment-input")
const submitButton = document.getElementById("submit")
let divList = document.getElementById("list")


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
        initCounter()
        pause.innerText = "pause"
        disableButtons()
    }
})

initCounter();

// Disable buttons when pause button is clicked
function disableButtons() {
    const buttons = document.querySelectorAll("button")
    buttons.forEach(element => {
        if (!intervalRunning) {
            if (element.id != "pause") {
                element.disabled = true
            }
        } else {
            element.disabled = false
        }
    })
}

//

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
        let htmlArray = currentLi.innerHTML.split(' ')
        let numberOfLikes = parseInt(htmlArray[2]) + 1;
        currentLi.innerHTML = `${currentNum} has ${numberOfLikes} likes`
    } else {
        const likesList = document.querySelector(".likes")
        const newLi = document.createElement("li")
        newLi.innerHTML = `${currentNum} has 1 like`
        newLi.id = currentNum
        likesList.appendChild(newLi)
    }

    // event listerner on the heart element 
    // declaring current number in the counter, parse int turning string into a number, 
    // declaring current li variable, setting that to the current number on the counter, theres a change of there not being a current node with the elementID of currentNum

})

// Comments



// 
// event listener on the submit button
// when click on submit, then take comment form value
// innerText appendChild to list ID div






submitButton.addEventListener("click", (event) => {
    let p = document.createElement("p")
    divList.append(formInput.value, p)
    event.preventDefault();
    formInput.value = ""
})







// define a heart counter, do we need to reset value or use the number stored to that value
// we want to count how many times heart button is clicked, 


// every time heart is clicked, add 1 to that 

// let heartCounter = 0
// let currentLi = document.getElementById(`${currentNumber}`)

// // debugger
// heart.addEventListener("click", () => {
//     heartCounter += 1
//     // we need to check if currentNum === previousNum


//     console.log(parseInt(counter.innerText))
//     console.log("current number value" + currentNumber)
//     console.log("heart counter number" + heartCounter)
// })
// we need to compare if currentNum === previousNum
// need to know what current number is, we need to keep track of 

// reset the heartCounter each time currentNum changes
// })