import { Component } from '@angular/core';
import { CRICKETTEAMS } from '../../CricketTeam';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
crketTms = CRICKETTEAMS;
playerName = 'Player Name';
}
