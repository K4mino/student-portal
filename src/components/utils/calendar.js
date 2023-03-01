import dayjs from 'dayjs';

let calendar = require('dayjs/plugin/localeData');

dayjs.extend(calendar);

let x = dayjs.weekdays();
console.log(x);
let INITIAL_MONTH = dayjs().format('M');
let INITIAL_YEAR = dayjs().format('YYYY');

let selectedMonth = dayjs(new Date(INITIAL_YEAR,INITIAL_MONTH - 1,1));
export let currentMonthDays;
//let previousMonthDays;
//let nextMonthDays;
createCalendar();

function createCalendar(year = INITIAL_YEAR,month = INITIAL_MONTH){
	currentMonthDays = createDaysForCurrentMonth(
		year,
		month,
		dayjs(`${year}-${month}-01`).daysInMonth()
	);
}

console.log(currentMonthDays);

function getNumberOfDaysInMonth(year,month){
	return dayjs(`${year}-${month}-01`).daysInMonth();
}

function createDaysForCurrentMonth(year,month){
	return [...Array(getNumberOfDaysInMonth(year,month))].map((day,i) => {
		return {
			date: dayjs(`${year}-${month}-${i + 1}`).format('YYYY-MM-DD'),
			dayOfMonth: i + 1,
			isCurrentMonth:true,
		};
	});
}
console.log(selectedMonth);


export const weekDays = [
	{
		label:'Пн',
	},
	{
		label:'Вт',
	},
	{
		label:'Ср',
	},
	{
		label:'Чт',
	},
	{
		label:'Пт',
	},
	{
		label:'Сб',
	},
	{
		label:'Вс',
	},
];