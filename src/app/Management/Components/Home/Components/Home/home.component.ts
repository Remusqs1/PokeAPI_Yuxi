import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { Pokemon } from '../../../../MethodParameters/pokemon';
import { PokeService } from '../../Services/pokeService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonList: Array<Pokemon>
  pokemon: Pokemon;
  searchQuantity = environment.searchQuantity;

  constructor(private pokeService: PokeService, private routes: Router) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonList = new Array<Pokemon>();

    for (let index = 1; index <= this.searchQuantity; index++) {
      this.pokeService.getPokes(index).subscribe(
        res => {
          this.pokemon = new Pokemon();
          this.pokemon.id = res.id;
          this.pokemon.name = res.name;
          this.pokemon.image = res.sprites.front_default;
          this.pokemon.type = new Array<string>();
          res.types.forEach(pokeType => {
            this.pokemon.type.push(pokeType.type);
          });
          this.pokemonList.push(this.pokemon);
          this.pokemonList = this.pokemonList.sort((a, b) => parseFloat(a.id.toString()) - parseFloat(b.id.toString()));
        },
        err => {
          console.log(err);
        }
      )
    }
    console.log(this.pokemonList);
  }

  onClickPokemon(id: number) {
    this.routes.navigate(['Details'], { queryParams: { id } });
  }

  goLogin() {
    this.routes.navigate(['']);
  }

  goHome() {
    this.routes.navigate(['Home']);
  }

}