export function textHeight() {
  function controlDescription(width) {
    document.querySelectorAll('.js-grade-task-des').forEach((el, index) => {
      const text = el.innerText.split('');
      if (text.length > width) {
        const shortText = text.slice(0, width - 1);
        el.innerHTML =
          shortText.join('') +
          '...' +
          `<button class="js-see-all-stack-description des-btn-${index} cut">see all</button>`;
        function hideDescription() {
          document
            .querySelector(`.des-btn-${index}`)
            .addEventListener('click', () => {
              el.innerHTML =
                text.join('') +
                `<button class="js-see-all-stack-description hide-des-btn-${index}">hide</button>`;
              document
                .querySelector(`.hide-des-btn-${index}`)
                .addEventListener('click', () => {
                  const shortText = text.slice(0, width);
                  el.innerHTML =
                    shortText.join('') +
                    '...' +
                    `<button class="js-see-all-stack-description des-btn-${index} cut">see all</button>`;
                  hideDescription();
                });
            });
        }

        hideDescription();
      }
    });
  }

  if (window.innerWidth > 1044 || window.innerWidth < 654) {
    controlDescription(350);
  } else if (window.innerWidth > 900) {
    controlDescription(90);
  } else if (window.innerWidth > 827) {
    controlDescription(60);
  }
}
