import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { AskComponent } from "../../components/ask/ask.component";
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
    private snackBar: MatSnackBar,
    private askDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes("add")) {
      return;
    }

    this.actvRoute.params
      .pipe(switchMap(({ id }) => this.httSrv.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  saveHero() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    // if have an id of the hero means that we need to update a particular hero
    if (this.hero.id) {
      this.httSrv.updateHero(this.hero).subscribe((response) => {
        this.openSnacckBar("Hero updated");
        setTimeout(() => this.router.navigate(["/heroes"]), 2800);
      });
    } else {
      // if not we need to create
      this.httSrv.newHero(this.hero).subscribe((hero) => {
        this.openSnacckBar("Hero saved");
        setTimeout(
          () => this.router.navigate(["/heroes/editar", hero.id]),
          2800,
        );
      });
    }
  }

  deleteHero() {
    const dialog = this.askDialog.open(AskComponent, {
      width: "250px",
      data: { ...this.hero },
    });

    // TODO Above there are two consecutive subscribe which can refactor with switchMap
    dialog.afterClosed().subscribe((payload) => {
      if (payload) {
        this.httSrv.deleteHero(this.hero.id!).subscribe((resp) => {
          this.router.navigate(["/heroes"]);
        });
      }
    });
  }

  openSnacckBar(message: string) {
    this.snackBar.open(message, "ok!", {
      duration: 2500,
    });
  }
}
