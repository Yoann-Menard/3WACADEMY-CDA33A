export class Attributes<P extends object> {
	constructor(private data: P) {}

	get = <K extends keyof P>(key: K): P[K] => {
		return this.data[key];
	};

	set(update: Partial<P>): void {
		Object.assign(this.data, update);
	}

	getAll(): P {
		return this.data;
	}
}

// const attrs = new Attributes<UserProps>({
//   id: 1,
//   name: 'John',
//   age: 34,
// });

// const john = { name: 'John', age: 34 };
// john['name'];
// const attrs = new Attributes<UserProps>({
// 	id: '2',
// 	name: 'John',
// 	age: 23,
// });
// const id = attrs.get('id') as string;

// if (typeof id === 'number') {
//   id.
//   console.log(id);
// }
