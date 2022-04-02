const task = document.getElementById("task");
const items = document.getElementById("items");
const listTask = [];
// functions
task.addEventListener("keyup", (ev) => {
  if (ev.code === "Enter") {
    addListItem();
  }
});

const addListItem = () => {
  const item = document.createElement("li");
  item.setAttribute("class", "todo-app__item");
  item.innerText = task.value;
  items.appendChild(item);
  console.log(task.value);
};
