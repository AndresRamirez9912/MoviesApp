import { Component, OnInit } from '@angular/core';
import { detail, Genre } from '../interfaces/detail.interface';
import { StorageService } from '../services/storage.service';
import { MoviesService } from '../services/movies.service';
import { movieBygenre } from '../interfaces/movies.interface';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  // Attributes
  genres:Genre[]=[]; // Create a genre array
  moviesGenre:movieBygenre[]=[]
  likedMovies:detail[]=[];

  constructor(
    private storageService:StorageService,
    private movieService:MoviesService,
    private modalCTR:ModalController) {}

  ngOnInit(){
      this.movieService.getGenres().subscribe(resp=>{
        this.genres=resp
      })
      this.likedMovies=this.getFavoriteArray
  }

  // Geters
  get getFavoriteArray():detail[]{
    return this.storageService.getFavorites();
  }

  // Methods
  async showDetail(id:number){
    const modal = await this.modalCTR.create({
      component:DetailModalComponent,
      componentProps: {
        id:id
      }
    });
    modal.present();
  }
}
