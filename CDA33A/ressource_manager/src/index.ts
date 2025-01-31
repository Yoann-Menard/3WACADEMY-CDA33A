import { Livre } from './lib/Livre';
import { Video } from './lib/Video';
import { CollectionRessources } from './lib/implementations/CollectionRessources';
import { IRessource } from './lib/interfaces/Ressource.interface';

const livre = new Livre('1', 'titre du livre', 'nom de l\'auteur');
const video = new Video('2', 'titre de la video', 60);

const collection = new CollectionRessources<IRessource>();

collection.addRessource(livre);
collection.addRessource(video);

console.log('Liste des ressources :');
collection.listRessource();

collection.deleteRessource('1');

console.log('test fonction listeRessources apres suppression :');
collection.listRessource();
