// notes / ressources :
// principe SOLID applique  :
// 5. interface permettant au classe qui l'implemente de pouvoir utiliser la methode search()
// www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-fr
export interface ISearchable<T> {
	// pas reussi a implementer correctement 
	search(criteria: (item: T) => boolean): T[];
}
