import lodash from "lodash";
const holidays = [
    { name: "christmas", date: new Date("2025-12-25") },
    { name: "Canada day", date: new Date("2025-07-01") },
    { name: "eid", date: new Date("2025-03-01") }
]


let today = new Date();

holidays.forEach(holiday => {
    let dateDifference = holiday.date - today;
    console.log(Math.ceil( dateDifference/(1000*60*60*24)))
});

let random_holiday = lodash.sample(holidays)
console.log(random_holiday)

console.log(lodash.findIndex(holidays, { name: "christmas" }));
console.log(lodash.findIndex(holidays, { name: "Canada Day" }));