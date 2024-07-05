// Project and Task data structures
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

class Task {
    constructor(name, deadline) {
        this.name = name;
        this.deadline = deadline;
        this.completed = false;
    }
}

// Project and Task arrays
let projects = [];
let tasks = [];

// Render project list
function renderProjectList() {
    const projectListUl = document.getElementById('project-list-ul');
    projectListUl.innerHTML = '';
    projects.forEach((project) => {
        const projectLi = document.createElement('li');
        projectLi.textContent = project.name;
        projectListUl.appendChild(projectLi);
    });
}

// Render task list
function renderTaskList() {
    const taskListUl = document.getElementById('task-list-ul');
    taskListUl.innerHTML = '';
    tasks.forEach((task) => {
        const taskLi = document.createElement('li');
        taskLi.textContent = `${task.name} - Deadline: ${task.deadline}`;
        taskListUl.appendChild(taskLi);
    });
}

// Create new project
document.getElementById('create-project-btn').addEventListener('click', () => {
    const projectNameInput = prompt('Enter project name:');
    if (projectNameInput) {
        const newProject = new Project(projectNameInput);
        projects.push(newProject);
        renderProjectList();
    }
});

// Create new task
document.getElementById('create-task-btn').addEventListener('click', () => {
    const taskNameInput = prompt('Enter task name:');
    const taskDeadlineInput = prompt('Enter task deadline:');
    if (taskNameInput && taskDeadlineInput) {
        const newTask = new Task(taskNameInput, taskDeadlineInput);
        tasks.push(newTask);
        renderTaskList();
    }
});

// Initialize project and task lists
renderProjectList();
renderTaskList();