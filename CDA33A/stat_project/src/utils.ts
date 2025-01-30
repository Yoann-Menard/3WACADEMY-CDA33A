export class DateUtils {
	static convertToDate(dateString: string): Date {
		// '28/08/2018'
		const [day, month, year] = dateString
			.split('/')
			.map((value: string): number => parseInt(value));
		// [28, 8, 2018]
		return new Date(Date.UTC(year, month - 1, day));
	}
}

export class NumberUtils {}
