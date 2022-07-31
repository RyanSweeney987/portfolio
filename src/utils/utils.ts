import moment from "moment";

export function toMonthYearstr(date: string): string {
	return toMonthYearDate(new Date(date));
}

export function toMonthYearDate(date: Date): string {
	let m = date.getMonth() + 1;
	let y = date.getFullYear();
	return m.toString() + "/" + y.toString();
}

export function getSpanYearsStr(dateA: string, dateB: string): number {
	return getSpanYearsDate(new Date(dateA), new Date(dateB));
}

export function getSpanYearsDate(dateA: Date, dateB: Date): number {
	let start = moment(dateA);
	let end = moment(dateB);
	let duration = moment.duration(end.diff(start));
	return round(duration.asYears(), 1);
}

export function round(value: number, precision: number): number {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}