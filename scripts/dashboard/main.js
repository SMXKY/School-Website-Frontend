import { loadSearchBar } from './searchBar.js';
import { navBarButtons } from './navBar.js';
import { sideBarFunctionality } from './sideBar.js';
import { taskCheck } from './taskCheck.js';
import { renderCalendar } from './calendar.js';
import { renderCreateModulePopup } from './renderPopUp.js';
import { taskPagePopups } from './taskPagePopups.js';
import { stackPagePopUps } from './stack-page-popups.js';
import { specificTaskPopups } from './specific-task.js';
import { checkTaskPopUp } from './check-task.js';
import { taskCheckFunctionality } from './taskCheckPopups.js';
import { textHeight } from './grade-task.js';
import { AsignUA } from './assign-a-u.js';
import { specificStackFunctionality } from './specific-stack.js';
import { stackTaskFunctionality } from './stack-task.js';
//import { renderCharts } from "./Charts.js";

const searchBar = document.querySelector('.js-search-form');

searchBar.addEventListener('submit', (event) => {
  if (window.innerWidth < 448) {
    event.preventDefault();
    loadSearchBar();
  }
});

navBarButtons();

sideBarFunctionality();

taskCheck();

console.log(window.location.pathname);

if (window.location.pathname === '/dashboard.html') {
  //console.log("jdsof");
  //renderCharts();
  renderCalendar(streakData.streakStart, streakData.streakCurrent);
} else if (window.location.pathname === '/all-modules.html') {
  renderCreateModulePopup();
} else if (window.location.pathname === '/all-tasks-page.html') {
  taskPagePopups();
} else if (window.location.pathname === '/all-stacks.html') {
  stackPagePopUps();
} else if (window.location.pathname === '/specific-task.html') {
  specificTaskPopups();
} else if (window.location.pathname === '/check-submited-task.html') {
  checkTaskPopUp();
} else if (window.location.pathname === '/task-check.html') {
  taskCheckFunctionality();
  AsignUA();
} else if (window.location.pathname === '/grade-task.html') {
  textHeight();
} else if (window.location.pathname === '/specific-stack.html') {
  specificStackFunctionality();
} else if (window.location.pathname === '/stack-task.html') {
  stackTaskFunctionality();
}
