import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyMonitoringService } from './services/logging.service';
import { NasaService } from './services/nasa.service';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public nasaInfo: any = [];
  public pokemons: any = [];

  constructor(public nasaService: NasaService,
              public pokemonService: PokemonService,
              public myMonitoringService: MyMonitoringService,
              public router: Router) { }

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
