// notes / ressources :
// principe SOLID applique  :
// 1. single responsibility principle (une seule responsabilite defini par la classe)
// 2. open/close principle (une classe doit etre ouverte pour l'extension et ferme pour la modification)
// 3. reprise methode displayDetails() de la classe MedicalData (classe parent).

// super()  Appelle le constructeur de la classe parente (MedicalData)
// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d

import { Diagnostic } from './Diagnostic';
import { MedicalData } from './MedicalData';
import { Treatment } from './Treatment';

export class Consultation extends MedicalData {
	public treatments: Treatment[] = [];
	constructor(
		id: string,
		date: Date,
		public medecin: string,
		public diagnostics: Diagnostic[],
		treatments: Treatment[] = []
	) {
		super(id, date);
		this.treatments = treatments;
	}

	displayDetails(): void {
		console.log(
			`Log du fichier Consultation.ts : Consultation : ID : ${this.id} Date : ${this.date} Medecin : ${this.medecin} Diagnostics : ${this.diagnostics}`
		);
		this.diagnostics.forEach((diagnostic) => diagnostic.displayDetails());
		console.log("Treatments");
		this.treatments.forEach((treatment) => treatment.displayDetails());
	}
}
