import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';

@Component({
  selector: 'app-media-watcher',
  templateUrl: './media-watcher.component.html',
  styleUrls: ['./media-watcher.component.css']
})
export class MediaWatcherComponent implements OnInit {

  @Input() mediaItem: MediaItem;
  @Output() closeButtonClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick(){
    this.closeButtonClick.emit(true);
  }

}
