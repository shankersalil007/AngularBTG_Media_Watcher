import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';
import { MediaItemService } from 'src/app/services/media-item.service';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem: MediaItem;
  @Output() onWatch = new EventEmitter<MediaItem>();

  constructor(private miService: MediaItemService) { }
  

  ngOnInit(): void {
  }

  onToggleFav(mediaItem: MediaItem){
    this.miService.toggleFav(mediaItem)
  }

  removeMediaItem(mediaItem: MediaItem){
    this.miService.removeItem(mediaItem);
  }

  onClickWatch(mediaItem: MediaItem){
    this.onWatch.emit(mediaItem);
  }

}
