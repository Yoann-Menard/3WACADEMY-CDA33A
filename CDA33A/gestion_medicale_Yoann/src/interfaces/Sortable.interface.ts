// notes / ressources :
// principe SOLID applique  :
// 5. interface permettant au classe qui l'implemente de pouvoir utiliser la methode search()
// www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-fr
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
export interface ISortable<T> {
	// pas reussi a implementer correctement
	sort(compareFn: (a: T, b: T) => number): T[];
}
