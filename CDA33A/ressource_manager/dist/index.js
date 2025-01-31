"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/lib/Ressource.ts
  var Ressource;
  var init_Ressource = __esm({
    "src/lib/Ressource.ts"() {
      "use strict";
      Ressource = class {
        constructor(id, titre) {
          this.id = id;
          this.titre = titre;
        }
      };
    }
  });

  // src/lib/Livre.ts
  var Livre;
  var init_Livre = __esm({
    "src/lib/Livre.ts"() {
      "use strict";
      init_Ressource();
      Livre = class extends Ressource {
        constructor(id, titre, auteur) {
          super(id, titre);
          this.id = id;
          this.titre = titre;
          this.auteur = auteur;
        }
        displayDetails() {
          console.log(
            `Livre : ${this.titre} e\u0301crit par ${this.auteur}, ID du livre: ${this.id}`
          );
        }
      };
    }
  });

  // src/lib/Video.ts
  var Video;
  var init_Video = __esm({
    "src/lib/Video.ts"() {
      "use strict";
      init_Ressource();
      Video = class extends Ressource {
        constructor(id, titre, duree) {
          super(id, titre);
          this.id = id;
          this.titre = titre;
          this.duree = duree;
        }
        displayDetails() {
          console.log(`Video : ${this.titre} de ${this.duree} minutes, ID de la video: ${this.id}`);
        }
      };
    }
  });

  // src/lib/implementations/CollectionRessources.ts
  var CollectionRessources;
  var init_CollectionRessources = __esm({
    "src/lib/implementations/CollectionRessources.ts"() {
      "use strict";
      CollectionRessources = class {
        constructor() {
          this.ressources = [];
        }
        addRessource(ressource) {
          this.ressources.push(ressource);
        }
        deleteRessource(id) {
          this.ressources = this.ressources.filter(
            (ressource) => ressource.id !== id
          );
        }
        listRessource() {
          this.ressources.forEach((ressource) => ressource.displayDetails());
        }
      };
    }
  });

  // src/index.ts
  var require_index = __commonJS({
    "src/index.ts"() {
      init_Livre();
      init_Video();
      init_CollectionRessources();
      var livre = new Livre("1", "titre du livre", "nom de l'auteur");
      var video = new Video("2", "titre de la video", 60);
      var collection = new CollectionRessources();
      collection.addRessource(livre);
      collection.addRessource(video);
      console.log("Liste des ressources :");
      collection.listRessource();
      collection.deleteRessource("1");
      console.log("test fonction listeRessources apres suppression :");
      collection.listRessource();
    }
  });
  require_index();
})();
