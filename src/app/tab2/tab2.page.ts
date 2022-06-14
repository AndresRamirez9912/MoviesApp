import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { movie, responseMovieDB } from '../interfaces/movies.interface';
import { LoadingController, ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  // Attributes
  searchText:string="";
  ideasArray:string[]=[];
  searchArray:movie[]=[];
  loading:boolean=false;

  constructor(
    private movieService:MoviesService,
    private modalCTR:ModalController
    ) {}

  ngOnInit() {
    this.movieService.getIdeas().subscribe(resp=>{this.ideasArray=resp})
  }

  // Methods
  search(event){
    this.loading=true; // Start the loading animation
    const searchWord:string = event.detail.value

    if(searchWord.length===0){
      this.loading=false;
      this.searchArray=[];
      return;
    }

    this.movieService.getSearchMovie(searchWord).subscribe(resp=>{
      this.searchArray=resp.results
      this.loading=false; // Stop the loading animation
    })
  }

  async searchClick(id:number){
    const modal = await this.modalCTR.create({
      component:DetailModalComponent,
      componentProps:{
        id:id
      }
    })
    modal.present()
  }
}
