import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Auth } from "../interfaces/auht.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private API_BASE: string = environment.API_BASE;

  constructor(private httpSrv: HttpClient) {}

  login() {
    return this.httpSrv.get<Auth>(`${this.API_BASE}/users/1`);
  }
}
