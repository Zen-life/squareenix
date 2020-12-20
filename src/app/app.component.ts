import { GamesService } from './services/games.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'square-enix';
  games: any;

  constructor(private service: GamesService) { 
  }

  ngOnInit() {
    this.service.getGames()
    .subscribe((response) => {
      console.log('res: ', response);
      this.games = response;
    }, (error: Response) => {
      if (error.status === 404) {
        console.log('This has already been deleted');
      } else {
        console.log('An unexpected error occurred');
        console.log(error); 
      }
      
    })
  }
}
