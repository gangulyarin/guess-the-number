import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent implements OnInit {

  guess: number;
  deviation: number;
  noOfTries: number;
  original: number;

  constructor() {
    this.initializeGame();
   }

   initializeGame(): void{
     this.guess=null;
     this.noOfTries=0;
     this.deviation=null;
     this.original=Math.floor(Math.random()*1000)+1;
   }

   verifyGuess(): void{
     this.deviation = this.original-this.guess;
     this.noOfTries++;
   }
  ngOnInit() {
  }

}
