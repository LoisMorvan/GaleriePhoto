import { ImagesService } from 'src/app/core/services/images.service';
import { inject } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { Images } from '../models/image.models';

export const imagesResolver: ResolveFn<Images[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ImagesService).getImages();
}
