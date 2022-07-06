import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Auth } from "../interfaces/auht.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private API_BASE: string = environment.API_BASE;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(private httpSrv: HttpClient) {}

  authVerify(): Observable<boolean> {
    if (!localStorage.getItem("token")) {
      return of(false);
    }

    return this.httpSrv.get<Auth>(`${this.API_BASE}/users/1`).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      }),
    );
  }

  login() {
    return this.httpSrv.get<Auth>(`${this.API_BASE}/users/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem("token", auth.id)),
    );
  }

  logout() {
    this._auth = undefined;
  }
}
