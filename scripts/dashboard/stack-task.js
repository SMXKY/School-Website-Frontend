export function stackTaskFunctionality() {
  document
    .querySelector('.js-submit-stack-task')
    .addEventListener('click', () => {
      document
        .querySelector('.js-stack-task-pop-up')
        .classList.remove('off-pop-up');

      document
        .querySelector('.js-close-stack-task-pop-up')
        .addEventListener('click', (e) => {
          e.preventDefault();
          document
            .querySelector('.js-stack-task-pop-up')
            .classList.add('off-pop-up');
        });
    });
}
