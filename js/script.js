import { addTask } from "../components/addTask.js";
import { displayTasks } from "../components/readTasks.js";

//I associate the click event to the function of adding the task
const btn = document.querySelector('[data-form-btn]');
btn.addEventListener('click', addTask);

//I call the function that brings and displays on the screen the task added to the container
displayTasks();