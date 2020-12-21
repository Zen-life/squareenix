import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url = 'https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132';

  constructor(private http: HttpClient) {
    
   }  

   getGames() {
    return this.http.get(this.url)
  //  .catchError((error: Response) => {
  //    if (error.status === 400) {
  //       return Observable.throwError();
        
  //    }
  //  })
  }
  
}
