import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { GetSpecificDataPipe } from './get-specific-data.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    GetSpecificDataPipe,
    ParesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagePipe,
    GetSpecificDataPipe,
    ParesPipe
  ]
})
export class PipesModule { }
