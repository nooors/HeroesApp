import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hero } from "../interfaces/hero.interface";

@Injectable({
  providedIn: "root",
})
export class HeroesService {
  API_BASE = "http://localhost:3000";
  constructor(private httpSrv: HttpClient) {}

  getAllHerores(): Observable<Hero[]> {
    return this.httpSrv.get<Hero[]>(`${this.API_BASE}/heroes`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.httpSrv.get<Hero>(`${this.API_BASE}/heroes/${id}`);
  }
}
