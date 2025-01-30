"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./composition/MatchReader");
const Summary_1 = require("./composition/Summary");
// const source = new CsvFileReader('./src/football.csv');
// const matchReader = new MatchReader(source);
const matchReader = MatchReader_1.MatchReader.fromCsv('./src/football.csv');
Summary_1.Summary.WinsAnalysisWithConsoleReport('Man United').buildAndPrintReport(matchReader.matches);
// const analysis = new WinsAnalysis('Man United');
// const output = new ConsoleReport();
// const summary = new Summary(analysis, output);
// summary.buildAndPrintReport(matchReader.matches);
const matches = matchReader.matches;
// const matches = matchReader.source.data;
// const fileReader = new MatchReader('./src/football.csv');
// fileReader.read();
// const matches = fileReader.data;
console.log(matches);
// je vais devoir comprendre l'heritage -> composition
