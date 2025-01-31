// notes / ressources :
// principe SOLID applique  :
// 1. single responsibility principle (une seule responsabilite defini par la classe)
// 2. open/close principle (la classe MedicalDataCollection doit etre ouverte pour l'extension mais ferme a la modification)
// 4. La méthode utilise une fonction de rappel (callback) pour définir les critères de recherche, ce qui la rend flexible et réutilisable.
// 5. La classe dépend de l'abstraction (MedicalData) et non de son implementation.
// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d
// ww.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-fr
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Indexed_collections

import { MedicalData } from '../models/MedicalData';


export class MedicalDataCollection<T extends MedicalData> {
	private data: T[] = [];

	add(item: T): void {
		this.data.push(item);
	}

	remove(id: string): void {
		this.data = this.data.filter((item) => item.id !== id);
	}

	update(id: string, updatedItem: T): void {
		const index = this.data.findIndex((item) => item.id === id);
		if (index !== -1) {
			this.data[index] = updatedItem;
		}
	}

	search(criteria: (item: T) => boolean): T[] {
		return this.data.filter(criteria);
	}

	sort(compareFn: (a: T, b: T) => number): T[] {
		return this.data.slice().sort(compareFn);
	}

	displayAll(): void {
		this.data.forEach((item) => item.displayDetails());
	}
}
