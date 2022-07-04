import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Hero } from "../../interfaces/hero.interface";
import { HeroesService } from "../../serivces/heroes.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  routeParam!: string;
  hero!: Hero;

  constructor(
    private actRoute: ActivatedRoute,
    private heroSrv: HeroesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.actRoute.params.subscribe(({ id }) => (this.routeParam = id));
    // console.log(this.routeParam);

    // this.heroSrv
    //   .getHeroById(this.routeParam)
    //   .subscribe((hero) => (this.hero = hero));
    // console.log(this.hero);

    this.actRoute.params
      .pipe(switchMap(({ id }) => this.heroSrv.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  goBack() {
    this.router.navigate(["/heroes/list"]);
  }
}
