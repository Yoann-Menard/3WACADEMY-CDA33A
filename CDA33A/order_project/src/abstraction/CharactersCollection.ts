import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
	constructor(public data: string) {
		super();
	} // Julie
	get length() {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number) {
		return (
			this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
		);
	}

	swap(leftIndex: number, rightIndex: number) {
		const arrayCharacters = this.data.split('');
		const tmp = arrayCharacters[leftIndex];
		arrayCharacters[leftIndex] = arrayCharacters[rightIndex];
		arrayCharacters[rightIndex] = tmp;
		this.data = arrayCharacters.join('');
	}
}
