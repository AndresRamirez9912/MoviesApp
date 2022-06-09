import { Component, OnInit} from '@angular/core';
import { movie } from '../interfaces/movies.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  // Attributes
  recentMovies:movie[]=[]; // Movie empty array
  backdropURL:string[]=[];

  constructor(private moviesService:MoviesService) {}

  ngOnInit(){
    this.moviesService.getMovies().subscribe(resp=>{
      this.recentMovies=resp.results;
    });
  }
}
