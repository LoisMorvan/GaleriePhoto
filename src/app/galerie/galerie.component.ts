import { Component } from '@angular/core';
import { Images } from '../core/models/image.models';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent {

  #images$!: Observable<Images[]>

  constructor(private route: ActivatedRoute) { }

  get images$(): Observable<Images[]> {
    return this.#images$;
  }

  ngOnInit(): void {
    this.#images$ = this.route.data.pipe(
      map(data => data['images'].images)
    );
  }
}
