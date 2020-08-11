import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public user: string;
  public textButton: string;
  public rockets: any[];
  public lastestRocket: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    // Pegando os dados direto das rotas, tipo um context api do React.
    this.route.data.subscribe(userData => this.user = userData.user.email);
  }

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

      if(!rocket.links) {
        return '';
      }

      return rocket;
    }))
  }

  public findLatest() {
    this.apiService.latestRocket().subscribe(res => this.lastestRocket = res)
  }
}
