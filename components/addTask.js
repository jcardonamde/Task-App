import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

//Function to add the Task element to the list
export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    if (value === '' || date === '') {
        return;
    };

    //Clear Text and Date inputs
    input.value = '';
    calendar.value = '';

    //Initialize the task selector to False
    const complete = false;

    //I create an Object that receives the properties of the values ​​entered along with the generator of IDs by uuid
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4(),
    };

    list.innerHTML = '';

    //I manipulate array to store data in the LocalStorage
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTasks();
};

//Function to create the task item in the HTML structure along with its CSS style
export const createTask = ({value, dateFormat, complete, id }) => {
    const task = document.createElement('li');
    task.classList.add('card');
    
    //Adding it to the main card
    const taskContent = document.createElement('div'); 

    const check = checkComplete(id);

    //Revalidated the status of the Check icon
    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    //const dateElement = document.createElement("span");
    //dateElement.innerText = dateFormat;

    task.appendChild(taskContent);
    //task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));
    return task;
};