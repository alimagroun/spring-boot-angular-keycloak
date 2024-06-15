import { Component,OnInit  } from '@angular/core';
import { TestService } from '../app/services/test.service';
import { KeycloakService } from '../app/services/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private testService: TestService, private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.testService.getMessage().subscribe(
      (response: string) => {
        this.message = response;
      },
      (error: any) => {
        console.error('Error fetching message', error);
      }
    );
  }

  async goToAccountManagement() {
    await this.keycloakService.navigateToAccountManagement();
  }
  
  async logout() {
    await this.keycloakService.logout();
  }











}