// DOM variables
var inputTask = document.getElementById('input-task');    // input field
var submitTask = document.getElementById('submit-task');  // a submit button
var todoList = document.getElementById('todo-list');      // a unordered list

// 2. Store a few tasks/items todo
var tasksToDo = ["Walk to the dog", "Wrap up FED Nov 2018", "Finish this app"];

// 3. Load up the todo list with items stored
// for (var i = 0; i < tasksToDo.length; i++) {
//   todoList.innerHTML += `<li class="task"><a href="#">${tasksToDo[i]}</a></li>`;
// }

tasksToDo.forEach(function(theTask) {
  todoList.innerHTML += `<li class="task"><a href="#">${theTask}</a></li>`;
});
// hi!

// 1. When I click on the "Add" button, add the task to the interface

// submitTask.addEventListener('click', function() {
//
//   var newTask = inputTask.value;
//   todoList.innerHTML += `<li class="task"><a href="#">${newTask}</a></li>`;
//
// })

$('#submit-task').click(function() {

  if (inputTask.value.length > 0) {
    $('#todo-list').append(`<li class="task"><a href="#">${$('#input-task').val()}</a></li>`)

  }
  else {
    swal({
      title: "Error!!!",
      text: "You must write a task to add it",
      icon: "error"
    });
  }

  //$('#todo-list').append( $('#submit-task').value() )
})


// 4. When I click a task, toggle it as complete or not-complete
// document.querySelectorAll('.task').forEach(function(thisTask) {
//   thisTask.classList.add('complete');
//   thisTask.innerHTML = '<a href="#">Done!</a>';
// })

// $('.task').addClass('complete');
// $('.task a').html('Complete!');

//$('.task').addClass('complete').html('<a href="#">Finito!</a>')

$('.task').sortable().disableSelection();
$('.task').draggable({ containment: "parent" });


$('.task').click(function() {
  $(this).toggleClass('complete');
})

$('.make-big-img').fluidbox();







// Add-ons:
// Can we sort this list?
// Can we alert the user in the case of errors?
// Can items be more complex (objects)?
// Can we store in Local storage?
// Create a new item (createElement)
// On "enter" add the new task
