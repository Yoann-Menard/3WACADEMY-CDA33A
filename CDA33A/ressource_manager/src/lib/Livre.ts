import { Ressource } from './Ressource';

export class Livre extends Ressource {
	constructor(public id: string, public titre: string, public auteur: string) {
		super(id, titre);
	}
	displayDetails(): void {
		console.log(
			`Livre : ${this.titre} écrit par ${this.auteur}, ID du livre: ${this.id}`
		);
	}
}
