import { Component, Input, OnInit } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';

@Component({
  selector: 'app-media-watcher',
  templateUrl: './media-watcher.component.html',
  styleUrls: ['./media-watcher.component.css']
})
export class MediaWatcherComponent implements OnInit {

  @Input() mediaItem: MediaItem;

  constructor() { }

  ngOnInit(): void {
  }

}
