import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import {UserProfile} from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;
  private _profile: UserProfile | undefined;

  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'realm-1',
        clientId: 'client-1'
      });
    }
    return this._keycloak;
  }

  get profile(): UserProfile | undefined {
    return this._profile;
  }

  async init() {
    const authenticated = await this.keycloak.init({
      onLoad: 'login-required',
    });

    if (authenticated) {
      this._profile = (await this.keycloak.loadUserProfile()) as UserProfile;
      this._profile.token = this.keycloak.token || '';
    }
  }

  login() {
    return this.keycloak.login();
  }

  logout() {
    return this.keycloak.logout({redirectUri: 'http://localhost:4200'});
  }

  navigateToAccountManagement() {
    return this.keycloak?.accountManagement();
    }    
}
