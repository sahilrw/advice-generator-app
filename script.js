//  API url
const url = "https://api.adviceslip.com/advice";

// selecting HTML elements
const adviceId = document.querySelector("#advice-id")
const adviceText = document.querySelector(".advice")
const getAdvice = document.querySelector(".btn")

// fetch and display content asynchronously
async function generateAdvice(){
    // fetch content from url
    const res = await fetch(url)

    // extract id and text from the JSON response
    const {slip: {id, advice}} = await res.json();

    // update displayed content on screen
    adviceId.textContent = id;
    adviceText.textContent = advice;
}

// initial call to display content on page load
generateAdvice()

// generate new advice on button click
getAdvice.addEventListener("click", generateAdvice)