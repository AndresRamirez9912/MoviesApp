import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { movie } from 'src/app/interfaces/movies.interface';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-slide-show-par',
  templateUrl: './slide-show-par.component.html',
  styleUrls: ['./slide-show-par.component.scss'],
})
export class SlideShowParComponent implements OnInit {

  @Input() movies:movie[]=[]; // Create the input variable
  @Output() loadMore= new EventEmitter();

  slidesOpts={
    slidesPerView :3.3, // Show a complete slide and a little from the next
    freeMode: true,
    spaceBetween: -10
  };
  constructor(private modalCTR:ModalController) { }

  ngOnInit() {}

  loadMorePoster(){
    this.loadMore.emit();
  }

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
