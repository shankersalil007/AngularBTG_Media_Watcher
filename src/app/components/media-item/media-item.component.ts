import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';
import { MediaItemListComponent } from '../media-item-list/media-item-list.component';
import { MediaItemService } from 'src/app/services/media-item.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem: MediaItem;
  @Output() onWatch = new EventEmitter<MediaItem>();
  @Output() itemUpdated = new EventEmitter<boolean>();

  constructor(private miService: MediaItemService) { }

  ngOnInit(): void {
  }

  onToggleFav(mediaItem: MediaItem){
    this.miService.toggleFav(mediaItem).subscribe(
      ()=>{
        this.itemUpdated.emit(true);
      }
    )
  }

  removeMediaItem(mediaItem: MediaItem){
    this.miService.removeItem(mediaItem).subscribe(
      () => {
        this.itemUpdated.emit(true);
      }
    )
  }

  onClickWatch(mediaItem: MediaItem){
    this.onWatch.emit(mediaItem);
  }

}
