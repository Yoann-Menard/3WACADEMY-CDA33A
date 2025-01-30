"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    } // Julie
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const arrayCharacters = this.data.split('');
        const tmp = arrayCharacters[leftIndex];
        arrayCharacters[leftIndex] = arrayCharacters[rightIndex];
        arrayCharacters[rightIndex] = tmp;
        this.data = arrayCharacters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
