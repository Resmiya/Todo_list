function addTodo() {
    var todoInput = document.getElementById('addtask');
    var todoText = todoInput.value.trim();
    if (todoText !== '') {
      var todoList = document.getElementById('todoList');
      var li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        <input  type="checkbox" onchange="toggleCompleted(this)">
        <span style="color:darkblue;font-size: larger;font-weight: bold;" >${todoText}</span>
        <button type="button" class="btn btn-danger btn-sm float-end" onclick="removeTodo(this)">Remove</button>
      `;
      todoList.appendChild(li);
      todoInput.value = '';
    }
  }

  // Function to toggle completed status
  function toggleCompleted(checkbox) {
    var span = checkbox.nextElementSibling;
    if (checkbox.checked) {
      span.classList.add('completed');
    } else {
      span.classList.remove('completed');
    }
  }

  // Function to remove todo item
  function removeTodo(button) {
    var li = button.parentElement;
    li.remove();
  }