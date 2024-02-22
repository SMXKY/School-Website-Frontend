export function taskPagePopups() {
  const addTaskButton = document.querySelector('.js-add-task-button');

  addTaskButton.addEventListener('click', () => {
    document
      .querySelector('.js-add-task-pop-up')
      .classList.remove('off-pop-up');

    document
      .querySelector('.js-close-add-task-pop-up')
      .addEventListener('click', (e) => {
        e.preventDefault();
        document
          .querySelector('.js-add-task-pop-up')
          .classList.add('off-pop-up');
      });
  });

  document.querySelector('.js-assign-to').addEventListener('click', (e) => {
    e.preventDefault();
    document
      .querySelector('.js-assign-show-students')
      .classList.remove('off-pop-up');

    document
      .querySelector('.js-close-student-assign')
      .addEventListener('click', (e) => {
        e.preventDefault();
        document
          .querySelector('.js-assign-show-students')
          .classList.add('off-pop-up');
      });
  });
}
