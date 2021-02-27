import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http:HttpClient) { }

  url: string = 'http://localhost:8080';

  sendBet(betNumOfPieces:number, betDice:number){
    return this.http.post(`${this.url}/playerActions/playerBet/`,{betNumOfPieces, betDice});
  }
}
// return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos/`, todo);
