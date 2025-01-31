"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalDataCollection = void 0;
class MedicalDataCollection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
    update(id, updatedItem) {
        const index = this.data.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.data[index] = updatedItem;
        }
    }
    search(criteria) {
        return this.data.filter(criteria);
    }
    sort(compareFn) {
        return this.data.slice().sort(compareFn);
    }
    displayAll() {
        this.data.forEach((item) => item.displayDetails());
    }
}
exports.MedicalDataCollection = MedicalDataCollection;
