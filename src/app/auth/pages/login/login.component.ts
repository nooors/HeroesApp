import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [
    `
      .container {
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      mat-card-content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  // pBar: boolean = false;

  constructor(private router: Router, private httpSrv: AuthService) {}

  ngOnInit(): void {}
  login() {
    // show progress bar
    // this.pBar = true;
    // go to backend
    // one user
    this.httpSrv.login().subscribe((response) => console.log(response));
    // avaible in all app
    // if everything is allright go to heroes list page
    this.router.navigate(["/heroes"]);
  }
}
