import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyMonitoringService } from 'src/app/services/logging.service';
import { NasaService } from 'src/app/services/nasa.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  public nasaInfo: any = [];
  public pokemons: any = [];

  constructor(public nasaService: NasaService,
              public pokemonService: PokemonService,
              public myMonitoringService: MyMonitoringService,
              public loggerService: MyMonitoringService,
              public router: Router) {
                this.loggerService.logPageView('Page One');
                this.loggerService.logEvent('EventOne');
               }

  ngOnInit() {
  }


  public getInfo() {
    this.nasaService.getInfo().subscribe((data: any) => {
      const dataInfo = data;
      console.log(dataInfo)
      this.nasaInfo = JSON.stringify(dataInfo);
    })
  }

  public getPokemons() {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      const dataInfo = data.results;
      console.log(dataInfo)
      this.pokemons = JSON.stringify(dataInfo);
      console.log(this.pokemons)
    })
  }
  
  public goSecondPage(){
    this.router.navigate(['pageTwo']);
  }
}