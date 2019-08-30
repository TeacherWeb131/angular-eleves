import { Component, OnInit, Input } from '@angular/core';
import { Eleve } from '../eleve';

@Component({
  selector: 'app-eleve-detail',
  templateUrl: './eleve-detail.component.html',
  styleUrls: ['./eleve-detail.component.css']
})
export class EleveDetailComponent implements OnInit {
  @Input() eleve: Eleve;
  constructor() { }

  ngOnInit() {
  }

}
