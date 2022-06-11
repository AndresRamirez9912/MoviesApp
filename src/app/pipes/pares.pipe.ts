import { Pipe, PipeTransform } from '@angular/core';
import { movie } from '../interfaces/movies.interface';

@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  transform(movies: movie[]): any[] {
    const pares = movies.reduce((result,currentValue,currentIndex:number,array:movie[])=>{
      if(currentIndex%2===0){
        result.push(array.slice(currentIndex,currentIndex+2))
      }
      return result;
    },[]);
    return pares;
  }

}
