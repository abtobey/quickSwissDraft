import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;

  names = [];
  dupNameError: boolean=false;
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  addName(input) {
    if(input===''){
      return
    }
    if(this.names.includes(input)){
      this.dupNameError=true
    } else {
      this.names.push(input);
      this.dupNameError=false
      console.log(this.names);
    }
    this.nameInput.nativeElement.value='';
  }

  setPlayerNames(names: string[]) {
    const playerNames = JSON.stringify(names);
  
    if (localStorage.getItem("playerNames") !== null) {
      localStorage.setItem("playerNames", playerNames);
    } else {
      localStorage.setItem("playerNames", playerNames);
    }
    this.router.navigate(['draft'])
  }

}
