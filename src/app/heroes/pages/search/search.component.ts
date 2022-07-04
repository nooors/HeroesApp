import { Component, OnInit } from "@angular/core";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { Router } from "@angular/router";

import { Hero } from "../../interfaces/hero.interface";
import { HeroesService } from "../../serivces/heroes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent implements OnInit {
  item: string = "";
  heroes: Hero[] = [];
  selectedHero!: Hero;
  noHero: boolean = false;

  constructor(private heroesSrv: HeroesService, private router: Router) {}

  ngOnInit(): void {}

  searching() {
    this.heroesSrv
      .getBySearch(this.item)
      .subscribe((heroes) => (this.heroes = heroes));
    if (this.heroes.length === 0) {
      this.noHero = true;
    }
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {
    const hero: Hero = event.option.value;
    this.item = hero.superhero;

    this.heroesSrv
      .getHeroById(hero.id!)
      .subscribe((hero) => (this.selectedHero = hero));

    // go to selected hero page
    this.router.navigate(["heroes", hero.id]);
  }
}
