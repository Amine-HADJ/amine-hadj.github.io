import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    throw new Error('Method not implemented.');
  }
  

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
