var Vehicule = function (modele, kilometrage, moteur, couleur) {
  this.modele = modele;
  this.kilometrage = kilometrage;
  this.moteur = moteur || 'serie';
  this.couleur = couleur || 'red';

  this.voyage = function (y) {
    this.kilometrage += y;
   }
  };


Audi = new Vehicule ('R8', 0, 'v8', 'red');

Twingo = new Vehicule ('Clio', 400, 'v6', 'yellow');

Lamborghini = new Vehicule ('Aventador', 300, 'v12', 'black');

Renault = new Vehicule ('Super8', 100, '', '');

Peugeot = new Vehicule ('207', 50, '', 'green');

Peugeot.voyage(200)
Peugeot
