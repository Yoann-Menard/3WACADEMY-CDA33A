import { ISortable } from './Sortable.interface';

export class CharactersCollection implements ISortable {
	constructor(public data: string) {} // Julie	
	get length() {
		return this.data.length;
	}

	// get data() {
	// 	return this._data;
	// }

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
