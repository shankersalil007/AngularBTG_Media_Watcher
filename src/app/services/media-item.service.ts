import { Injectable } from "@angular/core";
import { MediaItem } from "../models/media-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MediaItemService{

        constructor(private http: HttpClient){}

        mediaItems: MediaItem[];

        onRefresh$ = new Subject<boolean>();

        URL = 'http://localhost:3000/media';

        getMediaItems(): Observable<MediaItem[]>{
          return this.http.get<MediaItem[]>(this.URL);
        }

  

      toggleFav(mediaItem: MediaItem){
        // const index = this.mediaItems.findIndex(mi => (mi.id === mediaItem.id));
        // if(index > -1 ){
        //     this.mediaItems[index].isFavorite = !this.mediaItems[index].isFavorite;
        // }
        const urlWithId = this.URL + '/' + mediaItem.id;
        var mediaItemCopy: MediaItem = {...mediaItem};
        mediaItemCopy.isFavorite = !mediaItem.isFavorite;
        return this.http.put(urlWithId,mediaItemCopy);
      }

      removeItem(mediaItem: MediaItem){
        // const index = this.mediaItems.findIndex(mi => (mi.id === mediaItem.id));
        // if(index > -1 ){
        //     this.mediaItems.splice(index,1);
        // }
        const urlWithId = this.URL + '/' + mediaItem.id;
        return this.http.delete(urlWithId);
      }

      addMediaItem(mediaItem: MediaItem){
        // this.mediaItems.push(mediaItem)
        this.http.post(this.URL,mediaItem).subscribe(
          ()=>{
            this.onRefresh$.next(true);
          }
        )
      }

}