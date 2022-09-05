// document.getElementById("count-el").innerText = 5


// let count = 5
// count = count + 1 
// console.log(Count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked .           onclick tells what needs to be done when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")   // camelCase. RHS has been used to get the element from html code
console.log(countEl)



let count = 0
function increment() {
    count += 1
    countEl.innerText = count         // change value of element derived from html code.
    console.log(count)
}

function save() {
    let countstr = count + "-"
    saveEl.innerText += countstr
    console.log(count)
    count = 0
    countEl.textContent = 0
}




