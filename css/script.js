function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    var taskList = document.getElementById("taskList");
    
    if (taskInput === '') {
      alert("Please enter a task!");
      return;
    }
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput));
    
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.onclick = function() {
      li.remove();
    };
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    document.getElementById("taskInput").value = '';
  }
  