import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images } from 'src/app/core/models/image.models';
import { Observable } from 'rxjs';

@Injectable()
export class ImagesService {

  constructor(private http: HttpClient) { }

  public getImages(): Observable<Images[]> {
    return this.http.get<Images[]>('http://localhost:3000/images');
  }

  public createImage(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:3000/images', formData);
  }

}
