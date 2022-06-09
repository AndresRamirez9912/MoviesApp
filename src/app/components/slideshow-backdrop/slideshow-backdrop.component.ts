import { Component, Input, OnInit } from '@angular/core';
import { movie } from '../../interfaces/movies.interface';

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
  constructor() { }

  ngOnInit() {}

}
