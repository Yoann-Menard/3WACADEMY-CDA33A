// notes / ressources :
// principe SOLID applique  :
// 5. Le code dépend des abstractions (classes et interfaces) et non des implémentations .
// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d
// https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-fr

import { MedicalDataCollection } from './collections/MedicalDataCollection';
import { Consultation } from './models/Consultation';
import { Diagnostic } from './models/Diagnostic';
import { Medication } from './models/Medication';
import { Treatment } from './models/Treatment';

const diagnostic = new Diagnostic(
	'1',
	new Date(),
	'Grippe sévère',
	'Severe',
	'Cardiaque'
);
const medication = new Medication('1', new Date(), 'Paracetamol', '450 mg', [
	'Maux de tete',
	'Fievre',
]);

const medication2 = new Medication('2', new Date(), 'Ibuprofene', '500 mg', [
	'nausee',
]);
const treatment = new Treatment('1', new Date(), new Date(), [
	medication,
	medication2,
]);
const consultation = new Consultation(
	'1',
	new Date(),
	'Dr. Dupont',
	[diagnostic],
	[treatment]
);
consultation.treatments = [treatment];

consultation.displayDetails();

const collection = new MedicalDataCollection<Consultation>();
collection.add(consultation);
collection.displayAll();
