import { MatchData } from '../MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { IAnalyzer } from './interfaces/Analyzer.interface';
import { IOutputTarget } from './interfaces/OutputTarget.interface';
import { ConsoleReport } from './outputs/ConsoleReport';

export class Summary {
	constructor(
		public readonly analyzer: IAnalyzer,
		public readonly outputTarget: IOutputTarget
	) {}

	static WinsAnalysisWithConsoleReport(team: string) {
		return new Summary(new WinsAnalysis(team), new ConsoleReport());
	}

	buildAndPrintReport(matches: MatchData[]): void {
		const report = this.analyzer.run(matches);
		this.outputTarget.print(report);
	}
}
