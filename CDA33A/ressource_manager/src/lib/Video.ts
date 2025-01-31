import { Ressource } from "./Ressource";

export class Video extends Ressource {
  constructor(public id: string, public titre: string, public duree: number) {
    super(id, titre);
  }

  displayDetails(): void {
      console.log(`Video : ${this.titre} de ${this.duree} minutes, ID de la video: ${this.id}`)
  }
}