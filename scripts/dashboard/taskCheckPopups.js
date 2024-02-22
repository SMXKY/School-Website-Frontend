import { taskSubmisions } from './data.js';
export function taskCheckFunctionality() {
  function contentManager() {
    //Storing current data and clearing the space
    const ogContent = document.querySelector(
      '.js-og-page-content-task-check'
    ).innerHTML;

    document
      .querySelector('.js-submited-tasks')
      .addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.js-og-page-content-task-check').innerHTML = '';
        document
          .querySelector('.js-og-page-content-task-check')
          .classList.add('hide-task');

        document
          .querySelector('.js-all-tasks-option')
          .classList.remove('on-task-option');
        document
          .querySelector('.js-unsubmited-tasks')
          .classList.remove('on-task-option');
        document
          .querySelector('.js-submited-tasks-option')
          .classList.add('on-task-option');
        document
          .querySelector('.js-actual-not-submision-content')
          .classList.add('hide-task');

        document
          .querySelector('.js-task-sumision-tables')
          .classList.remove('hide-task');
        document
          .querySelector('.js-go-back-to-task')
          .addEventListener('click', () => {
            console.log(ogContent);
            document.querySelector('.js-og-page-content-task-check').innerHTML =
              ogContent;
            document
              .querySelector('.js-og-page-content-task-check')
              .classList.remove('hide-task');

            document
              .querySelector('.js-task-sumision-tables')
              .classList.add('hide-task');

            document
              .querySelector('.js-all-tasks-option')
              .classList.add('on-task-option');
            document
              .querySelector('.js-submited-tasks-option')
              .classList.remove('on-task-option');
            document
              .querySelector('.js-unsubmited-tasks')
              .classList.remove('on-task-option');
          });
        //making the filter responsive

        function filterFunctionality() {
          document
            .querySelector('.js-drop-down-move')
            .addEventListener('click', () => {
              if (
                document
                  .querySelector('.js-drop-down-move')
                  .classList.contains('show-drop-down')
              ) {
                document
                  .querySelector('.js-filter-menu')
                  .classList.add('hide-task');

                document
                  .querySelector('.js-drop-down-move')
                  .classList.remove('show-drop-down');
              } else {
                document
                  .querySelector('.js-filter-menu')
                  .classList.remove('hide-task');

                document
                  .querySelector('.js-drop-down-move')
                  .classList.add('show-drop-down');
              }

              document.addEventListener('click', (e) => {
                if (
                  !document
                    .querySelector('.js-filter-menu')
                    .contains(e.target) &&
                  !document
                    .querySelector('.js-drop-down-move')
                    .contains(e.target)
                ) {
                  document
                    .querySelector('.js-filter-menu')
                    .classList.add('hide-task');
                  document
                    .querySelector('.js-drop-down-move')
                    .classList.add('show-drop-down');
                }
              });
            });

          //rendering the submission tables

          /*Reques JSON from api end point here */
          const submisionData = taskSubmisions;

          let subHtml = '';

          submisionData.forEach((el) => {
            if (el.submited === true) {
              let gradeStatus = {
                class: '',
                text: 'Grade',
              };

              if (el.graded === true) {
                gradeStatus.class = 'graded-user-sub';
                gradeStatus.text = 'Graded';
              }

              subHtml += `
                  <div class="student-sub-template">
                  <div class="student-sub-template-left">
                    <img src="${el.img}" alt="user-profile" />
                    <div class="student-sub-template-info">
                      <p class="student-sub-template-userName">${el.userName}</p>
                      <p class="student-sub-template-userStack">${el.userStack}</p>
                    </div>
                  </div>
        
                  <div class="student-sub-template-right">
                    <a href="${el.solutionLink}">
                      <button class="student-submision-solution">Solution</button>
                    </a>
                    <a href="grade/${el.id}">
                        <button class="student-sub-template-grade-status ${gradeStatus.class}">${gradeStatus.text}</button>
                    </a>
                  </div>
                </div>
                  `;
            }
          });

          document.querySelector('.js-actual-submision-content').innerHTML =
            subHtml;

          document
            .querySelector('.js-filter-ungraded')
            .addEventListener('click', () => {
              let subHtml = '';

              submisionData.forEach((el) => {
                if (el.graded !== true && el.submited === true) {
                  let gradeStatus = {
                    class: '',
                    text: 'Grade',
                  };

                  if (el.graded === true) {
                    gradeStatus.class = 'graded-user-sub';
                    gradeStatus.text = 'Graded';
                  }

                  subHtml += `
                      <div class="student-sub-template">
                      <div class="student-sub-template-left">
                        <img src="${el.img}" alt="user-profile" />
                        <div class="student-sub-template-info">
                          <p class="student-sub-template-userName">${el.userName}</p>
                          <p class="student-sub-template-userStack">${el.userStack}</p>
                        </div>
                      </div>
            
                      <div class="student-sub-template-right">
                        <a href="${el.solutionLink}">
                          <button class="student-submision-solution">Solution</button>
                        </a>
                        <a href="grade/${el.id}">
                            <button class="student-sub-template-grade-status ${gradeStatus.class}">${gradeStatus.text}</button>
                        </a>
                      </div>
                    </div>
                      `;
                }
              });

              document.querySelector('.js-actual-submision-content').innerHTML =
                subHtml;
            });

          document
            .querySelector('.js-filter-graded')
            .addEventListener('click', () => {
              let subHtml = '';

              submisionData.forEach((el) => {
                if (el.graded === true) {
                  let gradeStatus = {
                    class: '',
                    text: 'Grade',
                  };

                  if (el.graded === true) {
                    gradeStatus.class = 'graded-user-sub';
                    gradeStatus.text = 'Graded';
                  }

                  subHtml += `
                      <div class="student-sub-template">
                      <div class="student-sub-template-left">
                        <img src="${el.img}" alt="user-profile" />
                        <div class="student-sub-template-info">
                          <p class="student-sub-template-userName">${el.userName}</p>
                          <p class="student-sub-template-userStack">${el.userStack}</p>
                        </div>
                      </div>
            
                      <div class="student-sub-template-right">
                        <a href="${el.solutionLink}">
                          <button class="student-submision-solution">Solution</button>
                        </a>
                        <a href="grade/${el.id}">
                            <button class="student-sub-template-grade-status ${gradeStatus.class}">${gradeStatus.text}</button>
                        </a>
                      </div>
                    </div>
                      `;
                }
              });

              document.querySelector('.js-actual-submision-content').innerHTML =
                subHtml;
            });

          document
            .querySelector('.js-filter-all-submisions')
            .addEventListener('click', () => {
              let subHtml = '';

              submisionData.forEach((el) => {
                if (el.submited === true) {
                  let gradeStatus = {
                    class: '',
                    text: 'Grade',
                  };

                  if (el.graded === true) {
                    gradeStatus.class = 'graded-user-sub';
                    gradeStatus.text = 'Graded';
                  }

                  subHtml += `
                      <div class="student-sub-template">
                      <div class="student-sub-template-left">
                        <img src="${el.img}" alt="user-profile" />
                        <div class="student-sub-template-info">
                          <p class="student-sub-template-userName">${el.userName}</p>
                          <p class="student-sub-template-userStack">${el.userStack}</p>
                        </div>
                      </div>
            
                      <div class="student-sub-template-right">
                        <a href="${el.solutionLink}">
                          <button class="student-submision-solution">Solution</button>
                        </a>
                        <a href="grade/${el.id}">
                            <button class="student-sub-template-grade-status ${gradeStatus.class}">${gradeStatus.text}</button>
                        </a>
                      </div>
                    </div>
                      `;
                }
              });

              document.querySelector('.js-actual-submision-content').innerHTML =
                subHtml;
            });
        }

        filterFunctionality();
      });
  }
  contentManager();

  function tableUnsubmisions() {
    const ogContent = document.querySelector(
      '.js-og-page-content-task-check'
    ).innerHTML;

    document
      .querySelector('.js-no-submited-tasks')
      .addEventListener('click', (e) => {
        e.preventDefault();
        document
          .querySelector('.js-all-tasks-option')
          .classList.remove('on-task-option');
        document
          .querySelector('.js-submited-tasks-option')
          .classList.remove('on-task-option');
        document
          .querySelector('.js-unsubmited-tasks')
          .classList.add('on-task-option');

        document.querySelector('.js-og-page-content-task-check').innerHTML = '';

        document
          .querySelector('.js-og-page-content-task-check')
          .classList.add('hide-task');

        document
          .querySelector('.js-task-unsubmision-tables')
          .classList.remove('hide-task');

        document
          .querySelector('.js-actual-not-submision-content')
          .classList.remove('hide-task');
        document
          .querySelector('.js-task-sumision-tables')
          .classList.add('hide-task');

        const submisionData = taskSubmisions;

        let subHtml = '';

        submisionData.forEach((el) => {
          if (el.submited === false) {
            let gradeStatus = {
              class: '',
              text: 'Grade',
            };

            if (el.graded === true) {
              gradeStatus.class = 'graded-user-sub';
              gradeStatus.text = 'Graded';
            }

            subHtml += `
                  <div class="student-sub-template">
                  <div class="student-sub-template-left">
                    <img src="${el.img}" alt="user-profile" />
                    <div class="student-sub-template-info">
                      <p class="student-sub-template-userName">${el.userName}</p>
                      <p class="student-sub-template-userStack">${el.userStack}</p>
                    </div>
                  </div>
        
                  <div class="student-sub-template-right">
                    <a href="${el.solutionLink}">
                      <button class="student-submision-solution" style="color: var(--light-grey)">Solution</button>
                    </a>
                    <a href="grade/${el.id}">
                        <button class="student-sub-template-grade-status ${gradeStatus.class}">${gradeStatus.text}</button>
                    </a>
                  </div>
                </div>
                  `;
          }
        });

        document.querySelector('.js-task-unsubmision-tables').innerHTML =
          subHtml;

        document
          .querySelector('.js-go-back-to-task-2')
          .addEventListener('click', () => {
            console.log(ogContent);
            document
              .querySelector('.js-og-page-content-task-check')
              .classList.remove('hide-task');
            document.querySelector('.js-og-page-content-task-check').innerHTML =
              ogContent;

            document
              .querySelector('.js-task-unsubmision-tables')
              .classList.add('hide-task');
            document
              .querySelector('.js-all-tasks-option')
              .classList.add('on-task-option');
            document
              .querySelector('.js-submited-tasks-option')
              .classList.remove('on-task-option');
            document
              .querySelector('.js-unsubmited-tasks')
              .classList.remove('on-task-option');

            document
              .querySelector('.js-actual-not-submision-content')
              .classList.add('hide-task');
          });
      });
  }

  tableUnsubmisions();
}
