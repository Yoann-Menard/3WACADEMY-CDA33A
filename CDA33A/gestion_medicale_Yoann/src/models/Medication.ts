// notes / ressources :
// principe SOLID applique  :
// 1. single responsibility principle (une seule responsabilite defini par la classe)
// 2. open/close principle (une classe doit etre ouverte pour l'extension et ferme pour la modification)
// 3. reprise methode displayDetails() de la classe MedicalData (classe parent).
// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d
// www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-fr
// super()  Appelle le constructeur de la classe parente (MedicalData)

import { MedicalData } from './MedicalData';

export class Medication extends MedicalData {
	constructor(
		id: string,
		date: Date,
		public name: string,
		public posologie: string,
		public sideEffects: string[]
	) {
		super(id, date);
	}

	displayDetails(): void {
		console.log(
			`Log du fichier Medication.ts : Medication : ID : ${this.id} Name : ${this.name} Posologie : ${this.posologie} Effets secondaires : ${this.sideEffects}`
		);
		this.sideEffects.forEach((effect) => console.log(`- ${effect}`));
	}
}
