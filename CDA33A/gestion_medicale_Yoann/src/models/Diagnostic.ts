// notes / ressources :
// principe SOLID applique  :
// 1. single responsibility principle (une seule responsabilite defini par la classe)
// 2. open/close principle (une classe doit etre ouverte pour l'extension et ferme pour la modification)
// 3. reprise methode displayDetails() de la classe MedicalData (classe parent).
// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d
// super()  Appelle le constructeur de la classe parente (MedicalData)
import { MedicalData } from './MedicalData';

export class Diagnostic extends MedicalData {
	constructor(
		id: string,
		date: Date,
		public description: string,
		public severity: string,
		public category: string
	) {
		super(id, date);
	}

	displayDetails(): void {
		console.log(
			`Log du fichier Diagnostic.ts : Diagnostic : ID : ${this.id}  Description : ${this.description} Severity : ${this.severity} Category : ${this.category}`
		);
	}
}
