import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class PokeService {

    pokeUrl = environment.pokeApiURl;

    constructor(private http: HttpClient) { }


    getPokes(index){
        return this.http.get<any>(`${this.pokeUrl}/pokemon/${index}`)
    }

    getPoke(){
        return this.http.get<any>(`${this.pokeUrl}/pokemon`)
    }

}