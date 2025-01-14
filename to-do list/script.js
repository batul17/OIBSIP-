const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

// Add Task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskTitle.value;
    const description = taskDescription.value;

    const taskElement = createTaskElement(title, description, false);
    pendingTasks.appendChild(taskElement);

    taskForm.reset();
});

// Create Task Element
function createTaskElement(title, description, isCompleted) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskContent = document.createElement('div');
    taskContent.innerHTML = `<strong>${title}</strong><br>${description}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskDiv.remove();
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = isCompleted ? 'Undo' : 'Complete';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', () => {
        taskDiv.remove();
        const targetList = isCompleted ? pendingTasks : completedTasks;
        targetList.appendChild(createTaskElement(title, description, !isCompleted));
    });

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    return taskDiv;
}