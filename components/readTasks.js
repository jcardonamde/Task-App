import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

//Every time the page loads this function is called
export const displayTasks = () => {
    const list = document.querySelector('[data-list]');
    //I convert the tasks stored from localStorage in string format to Objects
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(tasksList);
    orderDates(dates); 

    dates.forEach((date) => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if ( diff === 0) {
                list.appendChild(createTask(task));
            };
        });
    });
};