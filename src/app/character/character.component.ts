import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [PlayerService]
})
export class CharacterComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private playerService: PlayerService) { }

  goToLevelPage(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key]);
  };

  submitForm(name: string, species: string, age: string) {
    let newPlayer: Player = new Player(name, species, age);
    this.playerService.addPlayer(newPlayer);
  }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  };

}
