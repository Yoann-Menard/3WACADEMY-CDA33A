import { MatchData } from '../../MatchData';
import { MatchResult } from '../../MatchResult';
import { IAnalyzer } from '../interfaces/Analyzer.interface';

export class WinsAnalysis implements IAnalyzer {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let wins = 0;

		matches.forEach((match) => {
			if (match[1] == this.team && match[5] == MatchResult.HomeWin) {
				wins++;
			} else if (match[2] == this.team && match[5] == MatchResult.AwayWin) {
				wins++;
			}
		});

		return `${this.team} ${wins} games`;

		// console.log(`${this.team} ${wins} games`);
	}
}
