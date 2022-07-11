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
  constructor(private router: Router, private httpSrv: AuthService) {}

  ngOnInit(): void {}
  login() {
    // Ïr al backend
    // un usuario
    this.httpSrv.login().subscribe((response) => console.log(response));
    // disponible en toda la aplicación
    // si todo sale bien ir a la pagina de list heroes
    this.router.navigate(["/heroes"]);
  }
}
