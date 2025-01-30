"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieReader = exports.MatchReader = void 0;
const CsvFileReader_1 = require("./heritage/CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(line) {
        return [
            utils_1.DateUtils.convertToDate(line[0]),
            line[1],
            line[2],
            parseInt(line[3]),
            parseInt(line[4]),
            line[5],
            line[6],
        ];
    }
}
exports.MatchReader = MatchReader;
class MovieReader {
}
exports.MovieReader = MovieReader;
