import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SelfieService {

  private api: string = '/api/images.php';

  constructor(private http: Http) { }

  getImages(): Observable<any> {
    return this.http
      .get(this.api)
      .map(response => response.json());
  }

}
