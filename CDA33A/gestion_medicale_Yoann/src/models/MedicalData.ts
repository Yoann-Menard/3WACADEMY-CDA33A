// notes / ressources :
// principe SOLID applique  :
// 1. single responsibility principle (une seule responsabilite defini par la classe)
// 2. open/close principle (une classe doit etre ouverte pour l'extension et ferme pour la modification)
// 3. Toutes les sous-classes peuvent remplacer cette méthode sans altérer le comportement du programme.

// j'ajoute une methode abstraite displayDetails() pour afficher les details des donnees medicales ne pas oublier que chaque classes future qui herite de MedicalData devront implementer cette methode

// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d
export abstract class MedicalData {
	constructor(public id: string, public date: Date) {}

	abstract displayDetails(): void;
}
