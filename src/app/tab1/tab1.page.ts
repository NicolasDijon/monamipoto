/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  title = 'Mon ami poto page 1'; // Titre de la page
  textForm: FormGroup; // Formulaire de texte
  color = false; // Boolean pour modifier la couleur

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initTextForm();
  }

  ionViewWillEnter() {
    this.authService.checkAuth();
  }

  // Methode pour initialiser le formulaire de texte
  initTextForm() {
    this.textForm = this.formBuilder.group({
      text: [''],
    });
  }

  // Methode pour mettre a jour le titre
  updateTitle() {
    this.title = this.textForm.get('text').value;

    if (this.title === '') {
      this.title = 'Mon ami poto page 1';
    }
  }

  // Methode pour changer la couleur
  changeColor() {
    this.color = !this.color;
  }

  // Methode pour ce deconnecter
  logout() {
    this.authService.logout();
  }
}
