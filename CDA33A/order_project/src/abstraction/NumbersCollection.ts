import { Sorter } from "./Sorter";

// concrete class
export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}

	get length(): number {
		return this.data.length;
	}
	compare(leftIndex: number, rightIndex: number) {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number) {
		const tmp = arrayCharacters[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = tmp;
	}
}
