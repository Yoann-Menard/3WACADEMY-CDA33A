import { IOutputTarget } from '../interfaces/OutputTarget.interface';

export class ConsoleReport implements IOutputTarget {
	print(report: string): void {
		console.log(report);
	}
}
