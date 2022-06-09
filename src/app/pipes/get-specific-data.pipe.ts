import { Pipe, PipeTransform } from '@angular/core';
import { movie } from '../interfaces/movies.interface';

@Pipe({
  name: 'getSpecificData'
})
export class GetSpecificDataPipe implements PipeTransform {

  transform(movie: movie, action:string): string {
    if(action.toLowerCase() === "backdrop"){
      console.log(movie.backdrop_path);
      return movie.backdrop_path;
    }else if(action.toLowerCase() === "poster"){
      console.log(movie.poster_path);
      return movie.poster_path;
    }
    console.log(action);

  }

}
