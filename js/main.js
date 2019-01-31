// DOM variables
var inputTask = document.getElementById('input-task');    // input field
var submitTask = document.getElementById('submit-task');  // a submit button
var todoList = document.getElementById('todo-list');      // a unordered list

// 2. Store a few tasks/items todo


// 3. Load up the todo list with items stored


// 1. When I click on the "Add" button, add the task to the interface

submitTask.addEventListener('click', function() {

  var newTask = inputTask.value;
  todoList.innerHTML += `<li class="task"><a href="#">${newTask}</a></li>`;

})


// 4. When I click a task, toggle it as complete or not-complete






// Add-ons:
// Can we sort this list?
// Can we alert the user in the case of errors?
// Can items be more complex (objects)?
// Can we store in Local storage?
// Create a new item (createElement)
// On "enter" add the new task
