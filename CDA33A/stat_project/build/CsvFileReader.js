"use strict";
// import fs from 'fs';
// export class CsvFileReader {
// 	filename: string;
// 	data: string[][] = [];
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
// 	constructor(filename: string) {
// 		this.filename = filename;
// 	}
// 	read(): void {
// 		this.data = fs
// 			.readFileSync(this.filename, {
// 				encoding: 'utf-8',
// 			})
// 			.split('\n')
// 			.map((line: string): string[] => line.split(','));
// 		console.log(this.data);
// 	}
// }
// -------------------------- CORRECTION ---------------------------------------
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((line) => line.split(','))
            .map((line) => {
            return this.mapRow(line);
        });
        console.log(this.data);
    }
}
exports.CsvFileReader = CsvFileReader;
