import { CharactersCollection } from './interface/CharactersCollection';
import { NumbersCollection } from './interface/NumbersCollection';
import { ISortable } from './interface/Sortable.interface';
export class Sorter {
	constructor(public collection: ISortable) {}

	sort() {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.compare(j, j + 1)) {
					this.collection.swap(j, j + 1);
				}
				// if (this.collection[j] > this.collection[j + 1]) {
				// 	const leftHand = this.collection[j];
				// 	this.collection[j] = this.collection[j + 1];
				// 	this.collection[j + 1] = leftHand;
				// }
			}
		}
	}
}
