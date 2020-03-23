import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sakai-amplify-test';

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$.subscribe((authState) => {
      console.log('Auth state:', authState);
      console.log('Auth:', this.amplifyService.auth());
    });
  }

  public isLoggedIn(): boolean {
    return this.amplifyService.auth().user !== null;
  }

  public logout(): void {
    this.amplifyService.auth().signOut();
  }
}
