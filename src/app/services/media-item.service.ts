import { Injectable } from "@angular/core";
import { MediaItem } from "../models/media-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MediaItemService{

        constructor(private http: HttpClient){}

        mediaItems: MediaItem[];

        URL = 'http://localhost:3000/media';

        getMediaItems(): Observable<MediaItem[]>{
          return this.http.get<MediaItem[]>(this.URL);
        }

  

      toggleFav(mediaItem: MediaItem){
        const index = this.mediaItems.findIndex(mi => (mi.id === mediaItem.id));
        if(index > -1 ){
            this.mediaItems[index].isFavorite = !this.mediaItems[index].isFavorite;
        }
      }

      removeItem(mediaItem: MediaItem){
        const index = this.mediaItems.findIndex(mi => (mi.id === mediaItem.id));
        if(index > -1 ){
            this.mediaItems.splice(index,1);
        }
      }

      addMediaItem(mediaItem: MediaItem){
        this.mediaItems.push(mediaItem)
      }

}