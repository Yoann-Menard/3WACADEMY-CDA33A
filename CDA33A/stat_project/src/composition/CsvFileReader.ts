// // import fs from 'fs';
// // export class CsvFileReader {
// // 	filename: string;
// // 	data: string[][] = [];

// // 	constructor(filename: string) {
// // 		this.filename = filename;
// // 	}

// // 	read(): void {
// // 		this.data = fs
// // 			.readFileSync(this.filename, {
// // 				encoding: 'utf-8',
// // 			})
// // 			.split('\n')
// // 			.map((line: string): string[] => line.split(','));
// // 		console.log(this.data);
// // 	}
// // }

// // -------------------------- CORRECTION ---------------------------------------

import fs from 'fs';
import { IDataReader } from './interfaces/DataReader.interface';
export class CsvFileReader implements IDataReader {
	data: string[][] = [];

	constructor(public filename: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((line: string): string[] => line.split(','));
		console.log(this.data);
	}
}
