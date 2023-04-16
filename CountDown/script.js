let years = document.getElementById('years');
const minutes = document.getElementById('minutes');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');
const eventDate = document.getElementById('eventDate');

const eventDateValue = new Date('2024-12-30T04:45:00');

// Log the results to the console
setInterval(() => {
    eventDate.innerText = new Date(eventDateValue).toLocaleDateString();
    const newDate = new Date().getTime()
    const diff = new Date(eventDateValue).getTime() - newDate;
    
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minute = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    const second = Math.floor(diff % (1000 * 60) / 1000);

    console.log(diff , day);
    days.innerText = day.toString().padStart(2, '0') + 'days'
    hours.innerText = hour.toString().padStart(2, '0') + 'hrs'
    minutes.innerText = minute + 'min'
    seconds.innerText = second.toString().padStart(2, '0') + 's'
}, 1000);