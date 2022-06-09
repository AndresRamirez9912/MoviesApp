import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { responseMovieDB } from '../interfaces/movies.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccordionGroupChangeEventDetail } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  // Methods
  getMovies():Observable<responseMovieDB>{
    const actualDate = new Date() // Get the actual date
    const endDay = new Date( actualDate.getFullYear(), actualDate.getMonth()+1, 0).getDate(); // Get the date of the next month
    let month =(actualDate.getMonth() + 1); // This count start in 0
    let finalMonth:string="";
    if(month<10){
      finalMonth = "0" + month.toString(); // Concatenate with the string 0 at the begginig
    }else{
      finalMonth =month.toString(); // Dont concatenate
    }

    const initialDate =`${actualDate.getFullYear()}-${finalMonth}-01`
    const FinallDate =`${actualDate.getFullYear()}-${finalMonth}-${endDay}`
    return this.http.get<responseMovieDB>(`${environment.movieURL}/discover/movie?`,{
      params:{
        primary_release_date_gte : initialDate,
        primary_release_date_lte : FinallDate,
        api_key:environment.api_key,
        language :"es",
        include_image_language:"es",
      }
    });
  }
}
