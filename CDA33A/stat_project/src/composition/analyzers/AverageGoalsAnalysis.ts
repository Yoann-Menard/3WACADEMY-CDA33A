import { MatchData } from '../MatchData';
import { IAnalyzer } from './interfaces/Analyzer.interface';

export class AverageGoalsAnalysis implements IAnalyzer {
	constructor(private team: string) {}

	run(matches: MatchData[]): string {}
}
