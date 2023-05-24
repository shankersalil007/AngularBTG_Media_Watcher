import { Component, Input, OnInit } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem: MediaItem;

  constructor() { }

  ngOnInit(): void {
  }

}
