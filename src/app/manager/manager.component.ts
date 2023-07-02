import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Images } from '../core/models/image.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
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
