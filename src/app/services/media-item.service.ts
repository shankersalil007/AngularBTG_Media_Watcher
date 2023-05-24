import { Injectable } from "@angular/core";
import { MediaItem } from "../models/media-item.model";

@Injectable({
    providedIn: 'root'
})
export class MediaItemService{

    public mediaItems: MediaItem[] = [
        {
          id: 1,
          name: 'The Redemption',
          year: 1684928725540,
          category: 'Action',
          isFavorite: true,
        },
        {
          id: 2,
          name: 'The Dark Knight',
          year: 1211659951000,
          category: 'Action',
          isFavorite: false,
        },
        {
          id: 3,
          name: 'The Prestige',
          year: 1148501551000,
          category: 'Drama',
          isFavorite: false,
        }
    
      ]


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

}