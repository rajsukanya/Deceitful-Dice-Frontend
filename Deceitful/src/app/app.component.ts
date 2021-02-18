import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deceitful';

  constructor(public auth: AuthService, private router:Router) {}

  startGame(){
    this.router.navigate(['game']);
  }

  logout(){
  this.auth.logout({returnTo: 'http://localhost:4200'});
  }
}
