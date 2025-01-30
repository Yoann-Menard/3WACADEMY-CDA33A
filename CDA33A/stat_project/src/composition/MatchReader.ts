import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { DateUtils } from '../utils';
import { CsvFileReader } from './CsvFileReader';
import { IDataReader } from './interfaces/DataReader.interface';

export class MatchReader {
	matches: MatchData[] = [];

	constructor(public readonly source: IDataReader) {
		this.load();

	}
	static fromCsv(filename: string): MatchReader {
		return new MatchReader(new CsvFileReader(filename));
	}

	load() {
		this.source.read();
		this.matches = this.source.data.map((line) => {
			return [
				DateUtils.convertToDate(line[0]),
				line[1],
				line[2],
				parseInt(line[3]),
				parseInt(line[4]),
				line[5] as MatchResult,
				line[6],
			];
		});
	}
}
