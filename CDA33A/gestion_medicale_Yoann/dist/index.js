"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MedicalDataCollection_1 = require("./collections/MedicalDataCollection");
const Consultation_1 = require("./models/Consultation");
const Diagnostic_1 = require("./models/Diagnostic");
const Medication_1 = require("./models/Medication");
const Treatment_1 = require("./models/Treatment");
const diagnostic = new Diagnostic_1.Diagnostic('1', new Date(), 'Grippe severe', 'Severe', 'Cardiaque');
const medication = new Medication_1.Medication('1', new Date(), 'Paracetamol', '450 mg', [
    'Maux de tete',
    'Fievre',
]);
const treatment = new Treatment_1.Treatment('1', new Date(), new Date(), [medication]);
const consultation = new Consultation_1.Consultation('1', new Date(), 'John Doe', [
    diagnostic,
]);
const collection = new MedicalDataCollection_1.MedicalDataCollection();
collection.add(consultation);
collection.displayAll();
