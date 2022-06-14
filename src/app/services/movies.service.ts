import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { responseMovieDB, movie } from '../interfaces/movies.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { detail } from '../interfaces/detail.interface';
import { actors } from '../interfaces/actors.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // Attributes
  private page:number=0;
  constructor(private http:HttpClient) { }

  // Methods
  getDate() :string[]{
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
    return [initialDate,FinallDate]
  }
  getMovies():Observable<responseMovieDB>{
    let date=this.getDate();
    let initialDate=date[0];
    let FinallDate=date[1];

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
  getPopular(){
    this.page++;
    let date=this.getDate();
    let initialDate=date[0];
    let FinallDate=date[1];

    return this.http.get<responseMovieDB>(`${environment.movieURL}/discover/movie?`,{
      params:{
        page: this.page,
        sort_by: "popularity.desc",
        primary_release_date_gte : initialDate,
        primary_release_date_lte : FinallDate,
        api_key:environment.api_key,
        language :"es",
        include_image_language:"es",
      }
    });
  }
  getMovieDetail(id:number){
    return this.http.get<detail>(`${environment.movieURL}/movie/${id}`,{
      params:{
        api_key: environment.api_key
      }
    });
  }

  getActors(id:number){
    return this.http.get<actors>(`${environment.movieURL}/movie/${id}/credits`,{
      params:{
        api_key: environment.api_key
      }
    });
  }
  getIdeas():Observable<string[]>{
    return this.http.get<string[]>('../../assets/Data/ideas.json')
  }

  getSearchMovie(search:string):Observable<responseMovieDB>{
    return this.http.get<responseMovieDB>(`${environment.movieURL}/search/movie`,{
      params:{
        api_key:environment.api_key,
        language:'es',
        query:search,
      }
    })
  }
}
