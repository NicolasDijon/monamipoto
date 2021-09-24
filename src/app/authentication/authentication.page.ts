import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  title = 'Mon ami poto'; // Titre de la page
  authenticationForm: FormGroup; // Formulaire de connexion
  message: string; // Message en cas d'erreur

  // Identifiant de connexion
  email = 'monamipoto@gmail.com';
  password = '123456';
  // Fin

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initAuthenticationForm();
  }

  // Methode pour initialiser le formulaire de connexion
  initAuthenticationForm() {
    this.authenticationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
      ],
    });
  }

  // Methode pour valider le formulaire de connexion
  onSubmitAuthenticationForm() {
    if (!this.authenticationForm.valid) {
      return;
    }

    this.message = '';

    if (this.email === this.authenticationForm.get('email').value) {
      if (this.password === this.authenticationForm.get('password').value) {
        const user = {
          email: this.authenticationForm.get('email').value,
          password: this.authenticationForm.get('password').value,
        };

        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('tabs/tab1');
      } else {
        this.message = 'Mot de passe incorrect';
      }
    } else {
      this.message = 'Email inconnu';
    }
  }
}
