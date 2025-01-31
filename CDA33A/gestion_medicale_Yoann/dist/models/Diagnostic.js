"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diagnostic = void 0;
const MedicalData_1 = require("./MedicalData");
class Diagnostic extends MedicalData_1.MedicalData {
    constructor(id, date, description, severity, category) {
        super(id, date);
        this.description = description;
        this.severity = severity;
        this.category = category;
    }
    displayDetails() {
        console.log(`Log du fichier Diagnostic.ts : Diagnostic : ID : ${this.id}  Description : ${this.description} Severity : ${this.severity} Category : ${this.category}`);
    }
}
exports.Diagnostic = Diagnostic;
