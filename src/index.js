document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');
  const taskPriority = document.getElementById('task-priority');

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskDescription;
      listItem.classList.add(taskPriority.value);
      taskList.appendChild(listItem);
      taskInput.value = ''; //clear input field

      listItem.addEventListener('click', () => {
        listItem.remove();
      });    
    }
  });
});
