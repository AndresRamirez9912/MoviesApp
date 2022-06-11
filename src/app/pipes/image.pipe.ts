import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(image_url: string): string {
    if(!image_url){ // If doesnt exist an image return
      return "../../assets/images/cheems_was.png"
    }
    return environment.img_base.concat(image_url);
  }

}
