import { Component, OnInit } from '@angular/core';
import { SelfieService } from '../selfie.service';


@Component({
  selector: 'app-selfie-grid',
  templateUrl: './selfie-grid.component.html',
  styleUrls: ['./selfie-grid.component.css']
})
export class SelfieGridComponent implements OnInit {

  selfies: String[];

  constructor(private selfie: SelfieService) {}

  ngOnInit() {
    this.selfie.getImages().subscribe(d => this.selfies = d.selfies);
  }

}
