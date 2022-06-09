import { Component, Input, OnInit } from '@angular/core';
import { movie } from 'src/app/interfaces/movies.interface';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies:movie[]=[]; // Create the input variable

  slidesOpts={
    slidesPerView :3.3, // Show a complete slide and a little from the next
    freeMode: true
  };
  constructor() { }

  ngOnInit() {}

}
