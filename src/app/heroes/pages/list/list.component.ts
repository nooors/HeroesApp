import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Hero } from "../../interfaces/hero.interface";
import { HeroesService } from "../../serivces/heroes.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: [],
})
export class ListComponent implements OnInit {
  heroes!: Hero[];
  constructor(private httpSrv: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.httpSrv
      .getAllHerores()
      .subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }

  goUp() {
    {
      this.router.navigate([], { fragment: "listBegin" });
    }
  }
}
