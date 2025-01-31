import { IRessource } from './interfaces/Ressource.interface';

export abstract class Ressource implements IRessource {
	constructor(public id: string, public titre: string) {}
	abstract displayDetails(): void;
}
