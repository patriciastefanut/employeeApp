import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  stepsList: any []= [
    { stepName: 'Basic Details', isComplete: false},
    { stepName: 'Skills', isComplete: false},
    { stepName: 'Experience', isComplete: false},
  ]

  activeStep: any = this.stepsList[1];

  setActiveStep(activeStep: any) {
    this.activeStep= activeStep;
  }

}
