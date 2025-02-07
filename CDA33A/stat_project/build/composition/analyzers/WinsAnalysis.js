"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        matches.forEach((match) => {
            if (match[1] == this.team && match[5] == MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] == this.team && match[5] == MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        });
        return `${this.team} ${wins} games`;
        // console.log(`${this.team} ${wins} games`);
    }
}
exports.WinsAnalysis = WinsAnalysis;
