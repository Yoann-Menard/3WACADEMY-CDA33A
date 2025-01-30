"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("../utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(source) {
        this.source = source;
        this.matches = [];
        this.load();
    }
    static fromCsv(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    load() {
        this.source.read();
        this.matches = this.source.data.map((line) => {
            return [
                utils_1.DateUtils.convertToDate(line[0]),
                line[1],
                line[2],
                parseInt(line[3]),
                parseInt(line[4]),
                line[5],
                line[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
