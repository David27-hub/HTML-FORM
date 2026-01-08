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

// Handle task submission and DOM update
const form = document.getElementById("create-task-form");
const taskList = document.getElementById("task");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = {
    description: form["new-task-description"].value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  // Add task to list
  const li = document.createElement("li");
  li.textContent = task.description;
  taskList.appendChild(li);

  // Reset form and remove focus
  form.reset();
  inputs.forEach(input => input.parentElement.classList.remove("focus"));

  console.log("Task submitted:", task);
});
