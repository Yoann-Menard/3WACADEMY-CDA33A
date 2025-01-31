"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treatment = void 0;
const MedicalData_1 = require("./MedicalData");
class Treatment extends MedicalData_1.MedicalData {
    constructor(id, startDate, endDate, medications) {
        super(id, startDate);
        this.startDate = startDate;
        this.endDate = endDate;
        this.medications = medications;
    }
    get duration() {
        return this.endDate.getTime() - this.startDate.getTime();
    }
    displayDetails() {
        console.log(`Log du fichier Treatment.ts : Treatment : ID : ${this.id} Start Date : ${this.startDate} End Date : ${this.endDate} Duration : ${this.duration} ms   Medications : ${this.medications}`);
        this.medications.forEach((medication) => medication.displayDetails());
    }
}
exports.Treatment = Treatment;
