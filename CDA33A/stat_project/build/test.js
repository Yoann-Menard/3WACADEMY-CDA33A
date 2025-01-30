"use strict";
class HandleNumber {
    constructor() {
        this.data = [];
    }
}
class HandleString {
    constructor() {
        this.data = [];
    }
}
class HandleAnything {
    constructor() {
        this.data = [];
    }
}
// const handleNumber = new HandleNumber();
// handleNumber.data.push(23);
// const handleString = new HandleString();
// handleString.data.push('23');
const handleNumber = new HandleAnything();
handleNumber.data.push(23);
const handleString = new HandleAnything();
handleString.data.push('23');
