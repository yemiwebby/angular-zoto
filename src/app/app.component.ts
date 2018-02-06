import { Component } from '@angular/core';
import { JokesService} from './jokes.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'app works!';
  jokes: any = [];

  constructor(private jokesService: JokesService) {  }

  ngOnInit() {
    
  }

  fetchData() {
    this.jokesService.fetchData().subscribe(jokes => {
      console.log(jokes.value);
      this.jokes = jokes.value;
    });
  }

}
