import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "src/app/auth/interfaces/auht.interface";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  get auth(): Auth {
    return this.authSrv.auth;
  }

  constructor(private router: Router, private authSrv: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    localStorage.clear();
    this.router.navigate(["./auth"]);
  }
}
