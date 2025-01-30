"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = exports.DateUtils = void 0;
class DateUtils {
    static convertToDate(dateString) {
        // '28/08/2018'
        const [day, month, year] = dateString
            .split('/')
            .map((value) => parseInt(value));
        // [28, 8, 2018]
        return new Date(Date.UTC(year, month - 1, day));
    }
}
exports.DateUtils = DateUtils;
class NumberUtils {
}
exports.NumberUtils = NumberUtils;
