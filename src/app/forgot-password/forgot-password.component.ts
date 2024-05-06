import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  username: string = '';
  resetError: string = '';
  resetSuccess: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.resetPassword(this.username)
      .subscribe(
        () => {
          this.resetSuccess = true;
          this.resetError = '';
        },
        error => {
          this.resetSuccess = false;
          this.resetError = error;
        }
      );
  }

}
