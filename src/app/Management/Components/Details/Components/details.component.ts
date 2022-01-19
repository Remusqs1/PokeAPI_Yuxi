import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../../MethodParameters/pokemon';
import { PokeService } from '../../Home/Services/pokeService.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    pokemon: Pokemon;

    constructor(private activatedRoute: ActivatedRoute, private pokeService: PokeService,
                private routes: Router) { }

    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            let paramKey = params.get('id');

            if(paramKey !== null && paramKey !== undefined && paramKey !== ""){
                this.getPokemon(+paramKey);
            }
            else{
                this.goLogin();
            }
        })
    }

    getPokemon(id: number) {
        this.pokemon = new Pokemon();

        this.pokeService.getPokes(id).subscribe(
            res => {
                console.log(res);
                
                this.pokemon = new Pokemon();
                this.pokemon.id = res.id;
                this.pokemon.name = res.name;
                this.pokemon.image = res.sprites.front_default;
                this.pokemon.height = res.height;
                this.pokemon.weight = res.weight;
                this.pokemon.type = new Array<string>();
                this.pokemon.movList = new Array<string>();

                res.types.forEach(pokeType => {
                    this.pokemon.type.push(pokeType.type);
                });

                res.moves.forEach(move => {
                    this.pokemon.movList.push(move.move);
                });


            },
            err => {
                console.log(err);
            }
        )
    }

    goLogin(){
        this.routes.navigate(['']);
    }

    goHome(){
        this.routes.navigate(['Home']);
    }

}
