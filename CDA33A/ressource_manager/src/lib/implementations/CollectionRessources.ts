import { IRessource } from '../interfaces/Ressource.interface';

export class CollectionRessources<T extends IRessource> {
	private ressources: T[] = [];

	addRessource(ressource: T): void {
		this.ressources.push(ressource);
	}

	deleteRessource(id: string): void {	
		this.ressources = this.ressources.filter(
			(ressource) => ressource.id !== id
		);
	}

	listRessource(): void {
		this.ressources.forEach((ressource) => ressource.displayDetails());
	}
}
