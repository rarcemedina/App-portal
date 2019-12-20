import { Component, OnInit } from "@angular/core";

import { TokenStorageService } from "../auth/token-storage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  info: any;
  ver_extensiones: boolean = false;
  ver_materias: boolean = false;
  ver_pasantia: boolean = false;
  ver_correlativa: boolean = false;

  constructor(private token: TokenStorageService) {}

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  verExtension() {
    if (this.ver_extensiones == true) {
      this.ver_extensiones = false;
    } else {
      this.ver_extensiones = true;
      this.ver_materias = false;
      this.ver_pasantia = false;
    }
  }

  verMateria() {
    if (this.ver_materias == true) {
      this.ver_materias = false;
    } else {
      this.ver_materias = true;
      this.ver_extensiones = false;
      this.ver_pasantia = false;
    }
  }

  verPasantia() {
    if (this.ver_pasantia == true) {
      this.ver_pasantia = false;
    } else {
      this.ver_pasantia = true;
      this.ver_extensiones = false;
      this.ver_materias = false;
    }
  }

  verCorrelativas() {
    if (this.ver_correlativa == true) {
      this.ver_correlativa = false;
    } else {
      this.ver_correlativa = true;
    }
  }
}
