import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {

  @Input() img;
  @HostBinding('hidden') hidden: any = true;

  constructor() { }

  showContainer() {
    this.hidden = false;
  }

}
