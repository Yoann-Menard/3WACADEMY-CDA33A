// notes / ressources :
// principe SOLID applique  :
// 1. single responsibility principle (une seule responsabilite) => fournir des criteres de recherche
// 2. open/close principle (une classe doit etre ouverte pour l'extension et ferme pour la modification) => dans ce cas la je peux ajouter des nouveaux criteres de recherche sans modifier la classe MedicalDataCollection
// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d

import { Consultation } from '../models/Consultation';
import { Diagnostic } from '../models/Diagnostic';
export class SearchCriteria {
	static byMedecin(medecin: string): (item: Consultation) => boolean {
		return (item) => item.medecin === medecin;
	}

	static bySeverity(severity: string): (item: Diagnostic) => boolean {
		return (item) => item.severity === severity;
	}
}
