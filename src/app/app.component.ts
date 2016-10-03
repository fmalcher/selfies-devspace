import { Component, OnInit } from '@angular/core';
import { SelfieService } from './selfie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selfies: String[];

  constructor(private selfie: SelfieService) {}

  ngOnInit() {
    this.selfie.getImages().subscribe(d => this.selfies = d.selfies);
  }
}
