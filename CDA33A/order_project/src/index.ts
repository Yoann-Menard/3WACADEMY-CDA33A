import { CharactersCollection } from './abstraction/CharactersCollection';

const collection = new CharactersCollection('rachid');
collection.sort();
console.log(collection.data);

// import { NumbersCollection } from './interface/NumbersCollection';
// import { CharactersCollection } from './interface/CharactersCollection';
// import { Sorter } from './Sorter';

// // class Sorter {
// // 	constructor(public collection: number[] | string) {}
// // 	sort() {
// // 		const { length } = this.collection;

// // 		for (let i = 0; i < length; i++) {
// // 			for (let j = 0; j < length - i - 1; j++) {
// // 				// if (this.collection[j] > this.collection[j + 1]) {
// // 				// 	const leftHand = this.collection[j];
// // 				// 	this.collection[j] = this.collection[j + 1];
// // 				// 	this.collection[j + 1] = leftHand;
// // 				// }

// // 				if (this.collection instanceof Array) {
// // 					if (this.collection[j] > this.collection[j + 1]) {
// // 						const leftHand = this.collection[j];
// // 						this.collection[j] = this.collection[j + 1];
// // 						this.collection[j + 1] = leftHand;
// // 					}
// // 				}

// //         if (typeof this.collection == 'string') {

// //         }

// //         if (this.collection instanceof LinkedList) {

// // 			}
// // 		}
// // 	}
// // }

// // const collection = new NumbersCollection([10, 3, 0, -5]);
// const collection = new CharactersCollection('rachid');
// const sorter = new Sorter(collection);
// collection.sort();
// console.log(collection.data);
