import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JokesService {

  constructor(private http: Http) { }


  // get jokes now
  fetchData() {
    return this.http.get('http://api.icndb.com/jokes/random/5')
    .map(res => res.json());
  }

}
