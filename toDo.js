function addTask() {
    // Get the input value
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    // If the input is not empty
    if (taskText !== '') {
      // Create a new list item
      var listItem = document.createElement('li');

      // Create a checkbox
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function () {
        toggleTaskStatus(listItem, checkbox.checked);
      });

      // Create a span for the task text
      var taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;

      // Create a delete button
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        deleteTask(listItem);
      });

      // Append elements to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);

      // Append the list item to the task list
      document.getElementById('taskList').appendChild(listItem);

      // Clear the input field
      taskInput.value = '';
    }
  }

  function toggleTaskStatus(listItem, isChecked) {
    if (isChecked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  }

  function deleteTask(listItem) {
    listItem.remove();
  }