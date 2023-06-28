import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  playerList: any[] =[]
  constructor() { }

  ngOnInit(): void {
    const playerNames=JSON.parse(localStorage.getItem("playerNames"))
    for(let i=0; i<playerNames.length; i++){
      let nextPlayer: Player={
        id: i,
        name: playerNames[i],
        matchWins: 0,
        matchLosses: 0,
        opponents: []
      }
      this.playerList.push(nextPlayer)
    }
    const r1=this.randomPairing(playerNames)

    console.log(r1)
  }

  randomPairing(names: string[]): [string, string][] {
    const pairedNames: [string, string][] = [];
  
    // Make a copy of the names array to avoid modifying the original array
    const remainingNames = [...names];
  
    // If there is an odd number of names, pair the last name with "bye"

  
    while (remainingNames.length > 0) {
      if (remainingNames.length === 1) {
        const lastName = remainingNames.pop();
        pairedNames.push([lastName!, "bye"]);
      } else{
        const index1 = Math.floor(Math.random() * remainingNames.length);
        const name1 = remainingNames.splice(index1, 1)[0];
    
        const index2 = Math.floor(Math.random() * remainingNames.length);
        const name2 = remainingNames.splice(index2, 1)[0];
    
        pairedNames.push([name1, name2]);
      }

    }

    pairedNames.forEach( (element) =>{
      console.log(element)
      for(let i=0; i< this.playerList.length; i++){
        if(this.playerList[i].name === element[0])
        if(element[1]==='bye'){
          this.playerList[i].matchWins++
        } else {
          {this.playerList[i].opponents.push(element[1])} 
        }
        if(this.playerList[i].name === element[1])
          {this.playerList[i].opponents.push(element[0])} 
      }
    })
    console.log(this.playerList)
    return pairedNames;
  }


}
