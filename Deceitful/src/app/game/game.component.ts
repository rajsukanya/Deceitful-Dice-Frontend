import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { BetService } from '../service/bet.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  liar: boolean = false;
  betNumOfPieces: number = 3;
  betDice: number = 6;
  computerNumOfPieces: number = 5;

  constructor(
    private router:Router, 
    private betService: BetService 
    ) { }

  ngOnInit(): void {
  }

  confirmBox(){
    console.log('in confirm box');
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        // Save the two PI objects to database
        this.router.navigate(['home']);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        this.router.navigate(['home']);
      }
    })
    console.log('exit confirm box');
  }

  placeBet(){
    this.betService.sendBet(this.betNumOfPieces, this.betDice);
    console.log("inside place bet");
  }

}
