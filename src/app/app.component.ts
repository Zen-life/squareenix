import { GamesService } from './services/games.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Square Enix Fan Site';
  games: any[] = [];

  constructor(private service: GamesService) { 
  }

  ngOnInit() {
    this.service.getGames()
    .subscribe((response: any) => {
      console.log('res: ', response);
      this.games.splice(0, 0, response);
      let game = this.games
      console.log('games: ',game)
    }, (error: Response) => {
      if (error.status === 404) {
        console.log('Something went wrong, we cannot find the page');
      } else {
        console.log('An unexpected error occurred');
        console.log(error); 
      }
      
    })
  }
}
