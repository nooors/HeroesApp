import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Hero } from "../interfaces/hero.interface";

@Injectable({
  providedIn: "root",
})
export class HeroesService {
  private API_BASE: string = environment.API_BASE;
  constructor(private httpSrv: HttpClient) {}

  getAllHerores(): Observable<Hero[]> {
    return this.httpSrv.get<Hero[]>(`${this.API_BASE}/heroes`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.httpSrv.get<Hero>(`${this.API_BASE}/heroes/${id}`);
  }

  getBySearch(item: string): Observable<Hero[]> {
    return this.httpSrv.get<Hero[]>(
      `${this.API_BASE}/heroes?q=${item}&_limit=6`,
    );
  }

  newHero(hero: Hero): Observable<Hero> {
    return this.httpSrv.post<Hero>(`${this.API_BASE}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpSrv.put<Hero>(`${this.API_BASE}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.httpSrv.delete<any>(`${this.API_BASE}/heroes/${id}`);
  }
}
