export function generateSchedule(startDate, daysToShow = 60) {
const schedule = [];
let currentDate = new Date (startDate);
const  workDays = 4;
const restDays = 4;

for (let i = 0; i < daysToShow; i++) {
    schedule.push({
        date: new Date (currentDate),
        type: i % (workDays + restDays) < workDays? 'work':"rest",
    });
    currentDate.setDate(currentDate.getDate() + 1);
    }

    return schedule;
}