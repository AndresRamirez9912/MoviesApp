import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { movie } from '../../interfaces/movies.interface';
import { detail } from 'src/app/interfaces/detail.interface';
import { actors } from '../../interfaces/actors.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

  // Attributes
  @Input() id:number;
  movieDetail:detail;
  actorsDetail:actors;
  limit:number=150;
  limitFlag : boolean = false;
  slideActoresOpts={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween:-5
  }

  constructor(
    private movieService:MoviesService,
    private modalCTR:ModalController) { }

  ngOnInit() {
    this.movieService.getMovieDetail(this.id).subscribe(resp=>{
      this.movieDetail=resp
    });
    this.movieService.getActors(this.id).subscribe(resp=>{
      this.actorsDetail=resp;
    });
  }

  showMoreText(){
    this.limitFlag=!this.limitFlag; // Toggle
    if(this.limitFlag){
      this.limit=500;
    }else{
      this.limit=150;
    }

  }

  return(){
    this.modalCTR.dismiss(); // Close the modal
  }

  addFavorite(){

  }

}
