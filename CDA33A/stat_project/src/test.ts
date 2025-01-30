class HandleNumber {
	data: number[] = [];
}

class HandleString {
	data: string[] = [];
}

class HandleAnything<T> { // ca c'est la generecite
	data: T[] = [];
}

// const handleNumber = new HandleNumber();
// handleNumber.data.push(23);

// const handleString = new HandleString();
// handleString.data.push('23');

const handleNumber = new HandleAnything<number>();
handleNumber.data.push(23);

const handleString = new HandleAnything<string>();
handleString.data.push('23');
