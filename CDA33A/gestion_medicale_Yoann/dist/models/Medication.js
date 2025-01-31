"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medication = void 0;
const MedicalData_1 = require("./MedicalData");
class Medication extends MedicalData_1.MedicalData {
    constructor(id, date, name, posologie, sideEffects) {
        super(id, date);
        this.name = name;
        this.posologie = posologie;
        this.sideEffects = sideEffects;
    }
    displayDetails() {
        console.log(`Log du fichier Medication.ts : Medication : ID : ${this.id} Name : ${this.name} Posologie : ${this.posologie} Effets secondaires : ${this.sideEffects}`);
        this.sideEffects.forEach((effect) => console.log(`- ${effect}`));
    }
}
exports.Medication = Medication;
