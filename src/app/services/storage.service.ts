import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { detail } from '../interfaces/detail.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Attributes
  private _storage :Storage |null = null; //Create a initial null storage
  private _localMovies: detail[]=[]; // Cerate an array of movies

  constructor(private storage:Storage) {
    this.init();
   }

   // Getters
   getFavorites():detail[]{
    return [...this._localMovies]
   }

  // Init the storage
  async init(){
    const storage = await this.storage.create();
    this._storage=storage;
  }

  // Save the data into the storage
  saveRemoveData(data:detail){
    // Discover if the movie already exist
    const exist = this._localMovies.find(localMovie => localMovie.title === data.title)

    // Save / remove in the local array
    if(exist){
      this._localMovies=this._localMovies.filter(localMovies=>localMovies.title !== data.title) // Return without the selected movie
    }else{
      this._localMovies=[data, ...this._localMovies]; // Concatenate the movies
    }

    // Update the local storage
    this._storage.set('movies',this._localMovies) // Save my array
  }

  // Check if the movie already exist in the favorite array
  async movieInFavorites(movie:detail){
    if(this._localMovies.length===0){
      await this.loadFavorites()
    }
    return !!(this._localMovies.find(localMovie=>localMovie.title===movie.title));
  }

  // Load Favorites
  async loadFavorites(){
    try {
      this._localMovies = await this._storage.get('movies') || []; // If when I load there are not movies return null
    } catch (error) {
      // Do nothing
    }
  }
}
