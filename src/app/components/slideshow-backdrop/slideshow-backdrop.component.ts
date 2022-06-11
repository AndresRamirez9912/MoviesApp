import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { movie } from '../../interfaces/movies.interface';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies:movie[]=[]; // Create the input variable

  slidesOpts={
    slidesPerView :1.3, // Show a complete slide and a little from the next
    freeMode: true
  };
  constructor(private modalCTR :ModalController) { }

  ngOnInit() {}

  async showDetail(id:number){
    const modal= await this.modalCTR.create({
      component: DetailModalComponent,
      componentProps: {
        id : id,
      }
    })
    modal.present();
  }

}
