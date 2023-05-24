import { Component, Input, OnInit } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';
import { MediaItemListComponent } from '../media-item-list/media-item-list.component';
import { MediaItemService } from 'src/app/services/media-item.service';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem: MediaItem;

  constructor(private miService: MediaItemService) { }

  ngOnInit(): void {
  }

  onToggleFav(mediaItem: MediaItem){
    this.miService.toggleFav(mediaItem);
  }

  removeMediaItem(mediaItem: MediaItem){
    this.miService.removeItem(mediaItem);
  }

}
