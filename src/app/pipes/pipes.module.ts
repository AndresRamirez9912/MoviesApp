import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { GetSpecificDataPipe } from './get-specific-data.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    GetSpecificDataPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagePipe,
    GetSpecificDataPipe,
  ]
})
export class PipesModule { }
