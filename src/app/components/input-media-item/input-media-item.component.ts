import { Component, OnInit } from '@angular/core';
import { MediaItem } from 'src/app/models/media-item.model';
import { MediaItemService } from 'src/app/services/media-item.service';

@Component({
  selector: 'app-input-media-item',
  templateUrl: './input-media-item.component.html',
  styleUrls: ['./input-media-item.component.css']
})
export class InputMediaItemComponent implements OnInit {

  idGen = 100;

  constructor(private miService: MediaItemService) { }

  ngOnInit(): void {
  }

  addMediaItem(name,category,date){
    const mediaItem: MediaItem = {
      id: this.idGen++,
      name: name,
      category: category,
      year: Date.parse(date),
      isFavorite: false
    }
    if(name && category && date){
      alert("name: "+name+" category: "+category+" date: "+date);
      console.log("Media Item: ",mediaItem);
      this.miService.addMediaItem(mediaItem);
    }
  }

}
