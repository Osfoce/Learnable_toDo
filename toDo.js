/*
*****Oselu Fortunatus (W)*****

addTask: its a function that takes no parameter called at the click of a button that;
            a. gets user input
            b. uses an if condition to create a new list when input isn't empty
            c. creates an input of type "checkbox", checks when clicked
            e. creates a delete button by the side of the input text which delets a single item
            f. updates listItem by appending elements (checkbox, taskSpan and deleteButton)
            g. updates the ul with the id; taskList and clears the input field

toggleTaskStatus: a function that checks if the checkbox is ticked, it takes 2 parameters

delateTask: a function that deletes inputed task
*/
function addTask() {
    var taskInput = document.getElementById('taskInput');      
    var taskText = taskInput.value.trim();

    if (taskText !== '') {                                 
           var listItem = document.createElement('li');

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function () {
        toggleTaskStatus(listItem, checkbox.checked);
      });

      var taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;

      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        deleteTask(listItem);
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);

      document.getElementById('taskList').appendChild(listItem);

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