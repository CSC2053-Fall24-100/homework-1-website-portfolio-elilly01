    const button  = document.getElementById('toggle-schedule');
    const scheduleContainer = document.getElementById('schedule-container');

    button.addEventListener('click', () => {

    if(scheduleContainer.style.display == 'none') {
        scheduleContainer.style.display = 'block';
        button.textContent = 'Hide Schedule';
    } else {
        scheduleContainer.style.display = 'none';
        button.textContent = 'Show Schedule';
    }
    }
);