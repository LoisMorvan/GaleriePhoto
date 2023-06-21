import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent {
  images = [
    { titre: 'Image 1', url: 'chemin/vers/image1.jpg' },
    { titre: 'Image 2', url: 'chemin/vers/image2.jpg' },
    // Ajoutez d'autres images ici
  ];
}
