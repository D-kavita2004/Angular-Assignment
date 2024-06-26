import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightComponent } from "./right/right.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Console } from 'node:console';
import { catchError } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppModule } from './app.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RightComponent, FormsModule, CommonModule,]
})

export class AppComponent {
  title = 'KnowYourWorld';

  selectedCountry: string = '';

  constructor(private apiService: ApiService) { }

  onSearchCountry(value: any) {
    this.selectedCountry = value;
    console.log(this.selectedCountry);
  }
  
}