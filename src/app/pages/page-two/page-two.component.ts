import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  public chunk: any = [];
  public episodes: any = [];

  constructor(public nasaService: NasaService,
              public pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  public getInfo() {
    this.nasaService.getchuckInfo().subscribe((data: any) => {
      const dataInfo = data;
      console.log(dataInfo)
      this.chunk = JSON.stringify(dataInfo);
    })
  }

  public getEpisodes() {
    this.pokemonService.getRick().subscribe((data: any) => {
      const dataInfo = data;
      console.log(dataInfo)
      this.episodes = JSON.stringify(dataInfo);
    })
  }

}
