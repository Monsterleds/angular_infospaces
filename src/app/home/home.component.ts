import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public textButton: string;
  public rockets: any[];
  public lastestRocket: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.textButton = 'Link da decolagem';
    this.listAll();
    this.findLatest();
  }

  public listAll() {
    this.apiService.listAllRockets().subscribe(res => this.rockets = res.map(rocket => {
      if(!rocket.static_fire_date_utc) {
        rocket.static_fire_date_utc = 'Não registrado'
      }

      return rocket;
    }))
  }

  public findLatest() {
    this.apiService.latestRocket().subscribe(res => this.lastestRocket = res)
  }
}
