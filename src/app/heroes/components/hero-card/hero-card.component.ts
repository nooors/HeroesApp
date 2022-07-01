import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "../../interfaces/hero.interface";

@Component({
  selector: "app-hero-card",
  templateUrl: "./hero-card.component.html",
  styles: [
    `
      mat-card {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goHero(id: any) {
    this.route.navigate(["heroes", id]);
  }

  editHero(id?: string) {
    this.route.navigate(["heroes/edit", id]);
  }
}
