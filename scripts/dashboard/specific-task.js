export function specificTaskPopups() {
  document
    .querySelector('.js-submit-task-btn')
    .addEventListener('click', () => {
      document
        .querySelector('.js-link-submit-pop-up')
        .classList.remove('off-pop-up');

      document
        .querySelector('.js-close-link-submit-pop-up')
        .addEventListener('click', (e) => {
          e.preventDefault();
          document
            .querySelector('.js-link-submit-pop-up')
            .classList.add('off-pop-up');
        });
    });
}
