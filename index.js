// Floating label functionality
const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focus");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.parentElement.classList.remove("focus");
    }
  });
});

// Handle task submission
const form = document.getElementById("create-task-form");
const taskList = document.getElementById("task");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get task description
  const task = {
    description: form["new-task-description"].value
  };

  // Add task to list
  const li = document.createElement("li");
  li.textContent = task.description;
  taskList.appendChild(li);

  // Reset input and floating label
  form.reset();
  inputs.forEach(input => input.parentElement.classList.remove("focus"));

  console.log("Task submitted:", task);
});
