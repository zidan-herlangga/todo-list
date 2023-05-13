let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

// add btn disabled

input.addEventListener("keyup", () => {
  if (input.value.trim() !== 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// add new task

addBtn.addEventListener("click", () => {
  if (input.value.trim() !== 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <p>${input.value}</p>
          <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
        `;
    tasks.appendChild(newItem);
    input.value = "";
    saveData();
  } else {
    alert("Please enter a task");
  }
});

// when press "Enter" key

// addBtn.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.querySelector("myBtn").click();
//   }
// });

// delete item from list

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
    saveData();
  }
});

// mark item as comleted

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}

function showTask() {
  tasks.innerHTML = localStorage.getItem("data");
}
showTask();
