import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { movie } from '../../interfaces/movies.interface';
import { detail } from 'src/app/interfaces/detail.interface';
import { actors } from '../../interfaces/actors.interface';
import { ModalController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

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
  starName:string="star-outline";
  message:string="";
  exist:boolean;
  slideActoresOpts={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween:-5
  }

  constructor(
    private movieService:MoviesService,
    private modalCTR:ModalController,
    private storageService:StorageService,
    private toastCTR :ToastController) { }

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

  async addFavorite(){
    // Save or remove in the storage
    this.storageService.saveRemoveData(this.movieDetail)

    // Get if the movie already exist in the favorite array
    const exist:boolean = await this.storageService.movieInFavorites(this.movieDetail);

    // Change the icon
    if(exist){
      this.starName="star"
      this.message="Saved in favorites"
    }else{
      this.starName="star-outline"
      this.message="Removed from favorites"
    }
    this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastCTR.create({
      message: this.message,
      duration: 1000, // Duration in ms
    });
    toast.present();
  }

}
