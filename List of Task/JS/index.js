const renderTaskProgressData = (tasks) => {
    let tasksProgress;
    const tasksProgressDom = document.getElementById('tasks-progress');

    if(tasksProgressDom) tasksProgress = tasksProgressDom;
    else{
        const newTaskProgressDom = document.createElement('div');
        newTaskProgressDom.id = 'tasks-progress';
        document.getElementById('todo-footer').appendChild(newTaskProgressDom);
        tasksProgress = newTaskProgressDom;
    }

    const doneTasks = tasks.filter(({checked}) => checked).length;
    const totalTasks = tasks.length;
    tasksProgress.textContent = `${doneTasks}/${totalTasks} concluidas`;
}
const getCheckedBoxInput = ({id,description,checked}) => {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper =document.createElement('div');
    const checkBoxId = `${id}-checkbox`;

    checkBox.type = 'checkbox';
    checkBox.id = checkBoxId;
    checkBox.checked = checked || false;
    checkBox.addEventListener('change', onCheckedBoxClick);

    label.textContent = description;
    label.htmlFor = checkBoxId;

    wrapper.className = 'checkbox-label-container'

    wrapper.appendChild(checkBox);
    wrapper.appendChild(label);

    return wrapper;

}

const getNewId = () => {
    const tasks = getTasksFromLocalStorage();
    const lastID = tasks[tasks.length - 1]?.id;
    return lastID? lastID + 1 : 1;
}
const createTaskListItem = (task,checkBox) => {
    const list = document.getElementById('todo-list');
    const toDo = document.createElement('li');
    const button = document.createElement('button');
    toDo.id = task.id;
    button.textContent = 'x'
    button.ariaLabel = 'Remover tarefa'
    button.onclick = () => removeTask(task.id);
    toDo.appendChild(checkBox);
    toDo.appendChild(button);
    list.appendChild(toDo);
    914367023
    return toDo;

}

const getTasksFromLocalStorage = () => {
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    return tasks ? tasks : [];
}
const removeTask = (tasksID) => {
    const tasks = getTasksFromLocalStorage()
    const updateTasks = tasks.filter(({id}) => parseInt(id) !== parseInt(tasksID));
    setTasksInLocalStorage(updateTasks);
    renderTaskProgressData(updateTasks)
    document
        .getElementById("todo-list")
        .removeChild(document.getElementById(tasksID));
}
const getCreateTaskInfo = (event) => new Promise((resolve) =>{
    setTimeout(() => {
        resolve(getNewTaskData(event))
    },1000)
})
const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
    const id = getNewId();
    
    return {description,id}
}
const createtask = async (event) => {
    event.preventDefault();    
    document.getElementById('save-task').setAttribute('disabled',true);
    //const newTaskData = getNewTaskData(event);
    const newTaskData = await getCreateTaskInfo(event);
    //const {id,description} = newTaskData;
    
    const check = getCheckedBoxInput(newTaskData);
    createTaskListItem(newTaskData,check);
    const tasks = getTasksFromLocalStorage();
    const updateTasks = [...tasks, {id:newTaskData.id,description:newTaskData.description,checked:false}]
    setTasksInLocalStorage(updateTasks);
    renderTaskProgressData(updateTasks)

    document.getElementById('description').value = '';
    document.getElementById('save-task').removeAttribute('disabled');
}


window.onload = function() {
    const form = document.getElementById('create-todo-form');
    form.addEventListener('submit', createtask);

    const tasks = getTasksFromLocalStorage()

    tasks.forEach((task) => {
        const checkbox = getCheckedBoxInput(task);
        const list = document.getElementById('todo-list');
        const toDo = document.createElement('li');
        const button = document.createElement('button');

        button.textContent = 'x'
        button.ariaLabel = 'Remover tarefa'
        button.onclick = () => removeTask(task.id);
    
        toDo.id = task.id;
        toDo.appendChild(checkbox);
        toDo.appendChild(button);

        list.appendChild(toDo);
    })
    renderTaskProgressData(tasks)
}
const setTasksInLocalStorage = (tasks) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    
}
const removeDoneTask = () => {
    const tasks = getTasksFromLocalStorage()
    
    const tasksToRemove = tasks.filter(({checked}) => checked)
    .map(({id}) => id)
    const updateTasks = tasks.filter(({checked}) => !checked);
    setTasksInLocalStorage(updateTasks);
    renderTaskProgressData(updateTasks)

    tasksToRemove.forEach((taskToRemoeve) => {
        document
            .getElementById("todo-list")
            .removeChild(document.getElementById(taskToRemoeve));
    })
}
const onCheckedBoxClick = (event) => {
    const [id] = event.target.id.split('-');
    const tasks = getTasksFromLocalStorage()

    const updateTasks = tasks.map((task) => {
        return parseInt(id) === parseInt(task.id)
            ? {...task, checked: event.target.checked}
        : task;               
    })
    setTasksInLocalStorage(updateTasks);
    renderTaskProgressData(updateTasks)

}