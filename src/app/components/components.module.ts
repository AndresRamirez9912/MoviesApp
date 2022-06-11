import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideShowParComponent } from './slide-show-par/slide-show-par.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';


@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParComponent,
    DetailModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParComponent,
    DetailModalComponent
  ]
})
export class ComponentsModule { }
