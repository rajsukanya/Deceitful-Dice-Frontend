import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent},
  {path:'game', component: GameComponent},
  {path:'score', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


