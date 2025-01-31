// notes / ressources :
// principe SOLID applique  :
// 1. single responsibility principle (une seule responsabilite defini par la classe)
// 2. open/close principle (une classe doit etre ouverte pour l'extension et ferme pour la modification)
// 3. reprise methode displayDetails() de la classe MedicalData (classe parent).
// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d
// https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-fr
// super()  Appelle le constructeur de la classe parente (MedicalData)
import { MedicalData } from './MedicalData';
import { Medication } from './Medication';

export class Treatment extends MedicalData {
	constructor(
		id: string,
		public startDate: Date,
		public endDate: Date,
		public medications: Medication[]
	) {
		super(id, startDate);
	}

	get duration(): number {
		return this.endDate.getTime() - this.startDate.getTime();
	}

	displayDetails(): void {
		console.log(
			`Log du fichier Treatment.ts : Treatment : ID : ${this.id} Start Date : ${this.startDate} End Date : ${this.endDate} Duration : ${this.duration} ms   Medications : ${this.medications}`
		);
		this.medications.forEach((medication) => medication.displayDetails());
	}
}
