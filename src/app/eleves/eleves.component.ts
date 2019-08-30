import { Component, OnInit } from '@angular/core';
import { Eleve } from '../eleve';
import { ELEVES } from "../mock-eleves";

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {
  eleves = ELEVES;
  selectedEleve: Eleve;

  
  constructor() { }
  
  ngOnInit() {
  }
  
  onSelect(eleve: Eleve): void {
    this.selectedEleve = eleve;
  }

}
