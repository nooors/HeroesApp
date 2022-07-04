import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { Hero } from "../../interfaces/hero.interface";
import { Publisher } from "../../interfaces/hero.interface";
import { HeroesService } from "../../serivces/heroes.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  publishers = [
    { id: "DC Comic", desc: "DC - Comics" },
    { id: "Marvel Comics", desc: "Marvel - Comics" },
  ];
  title: string = "New Hero";

  hero: Hero = {
    superhero: "",
    publisher: Publisher.DCComics,
    alter_ego: "",
    first_appearance: "",
    characters: "",
    image: "",
  };

  constructor(
    private httSrv: HeroesService,
    private router: Router,
    private actvRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const updating = this.actvRoute.params
      .pipe(switchMap(({ id }) => this.httSrv.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
    if (!this.hero.id) {
      this.title = `Updating ${this.hero.superhero}`;
    }
  }

  saveHero() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    // if have an id of the hero means that we need to update a particular hero
    if (this.hero.id) {
      this.httSrv
        .updateHero(this.hero)
        .subscribe((hero) => console.log(`Updating ${hero}`));
    } else {
      // if not we need to create
      this.httSrv.newHero(this.hero).subscribe((hero) => {
        this.router.navigate(["/heroes/editar", hero.id]);
      });
    }
  }
}
