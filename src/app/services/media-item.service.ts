import { Injectable } from "@angular/core";
import { MediaItem } from "../models/media-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MediaItemService{

        constructor(private http: HttpClient){}

        onRefresh$ = new Subject();

        URL = 'http://localhost:3000/media';

        getMediaItems(): Observable<MediaItem[]>{
          return this.http.get<MediaItem[]>(this.URL);
        }

        updateMediaItem(mediaItem): Observable<MediaItem>{
          return this.http.put<MediaItem>(this.URL+'/'+mediaItem.id,mediaItem);
        }
        
      toggleFav(mediaItem: MediaItem): void{
        mediaItem.isFavorite = !mediaItem.isFavorite;
        this.updateMediaItem(mediaItem).subscribe();
      }

      removeItem(mediaItem: MediaItem){
        this.http.delete(this.URL+'/'+mediaItem.id).subscribe(
          () => {
            this.onRefresh$.next(true);
          }
        );
      }

      addMediaItem(mediaItem: MediaItem){
        this.http.post(this.URL,mediaItem).subscribe(
          () => {
            this.onRefresh$.next(true);
          }
        );
      }

}