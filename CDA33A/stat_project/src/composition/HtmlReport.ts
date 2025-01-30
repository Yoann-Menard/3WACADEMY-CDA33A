import { IOutputTarget } from './interfaces/OutputTarget.interface';

class HtmlReport implements IOutputTarget {
	print(report: string): void {}
}
