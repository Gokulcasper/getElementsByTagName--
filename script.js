// How to select DOM Elements

// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. Finding Elements by css Selectors
// 5. querySelector and querySelectorAll()

let inputTxtId = document.getElementById("input-txt-id");
let inputButtonId = document.getElementById("input-button-id");
let inputList = document.getElementById("input-list");

inputButtonId.addEventListener("click", () => {
  inputList.innerHTML += `<li class="input-item">${inputTxtId.value.toUpperCase()}</li>`;
});

// document.getElementsByClassName

// // let inputClass = document.getElementsByClassName("input-item");  (or)
// let inputClass = inputList.getElementsByClassName("input-item");

// // console.log(inputClass[0].innerText);

// let allSports = [].map.call(inputClass, (games) => games.textContent);

// console.log(allSports);

//-----------------------------------------------------

// getElementsByTagName()

const inputTag = document.getElementsByTagName("li");
console.log(`I have ${inputTag.length} items`);

// const inputName = document.getElementsByName("input-name");    --> is a node
// console.log(inputName);
