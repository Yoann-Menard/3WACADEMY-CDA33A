class Point {
	constructor(public x: number, public y: number) {}
}

abstract class Forme {
	constructor(public centre: Point) {}
	abstract aire(): number;

	abstract perimetre(): number;
}

class Rectange extends Forme {
	// Heritage traduit la relation "est un" (is a)
	constructor(
		public centre: Point, // Composition traduit la relation "a un" (has a)
		public longueur: number,
		public largeur: number
	) {
		super(centre);
	}
	// reecrire les methodes aire et perimetre
	aire() {
		return this.longueur * this.largeur;
	}

	perimetre() {
		return 2 * (this.longueur + this.largeur);
	}
}

class Cercle extends Forme {
	constructor(public centre: Point, public rayon: number) {
		super(centre);
	}

	aire() {
		return Math.PI * this.rayon ** 2;
	}

	perimetre() {
		return 2 * Math.PI * this.rayon;
	}
}

// const centre_rect = new Point(0, 0);

const Rectangle = new Rectange(new Point(2, -2), 12, 5);

console.log(Rectangle.aire());

const cercle = new Cercle(new Point(3, 4), 5);
console.log(cercle.aire());

// const forme = new Forme(new Point(2, 3)); // Interdit il est impossible d'instancier une classe abstraite
