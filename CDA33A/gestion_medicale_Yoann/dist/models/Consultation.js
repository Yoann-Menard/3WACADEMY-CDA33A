"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultation = void 0;
const MedicalData_1 = require("./MedicalData");
class Consultation extends MedicalData_1.MedicalData {
    constructor(id, date, medecin, diagnostics) {
        super(id, date);
        this.medecin = medecin;
        this.diagnostics = diagnostics;
    }
    displayDetails() {
        console.log(`Log du fichier Consultation.ts : Consultation : ID : ${this.id} Date : ${this.date} Medecin : ${this.medecin} Diagnostics : ${this.diagnostics}`);
        this.diagnostics.forEach((diagnostic) => diagnostic.displayDetails());
    }
}
exports.Consultation = Consultation;
