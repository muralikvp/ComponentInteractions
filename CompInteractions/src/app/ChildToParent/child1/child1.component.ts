import { Component, Input } from '@angular/core';
import { CricketTeam } from 'src/app/CricketTeam';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() CricketTeams!: CricketTeam;
  @Input() PlayerName! :string;
}
