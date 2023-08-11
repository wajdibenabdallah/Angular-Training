import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent {
  testVar: boolean;

  constructor() {
    this.testVar = false;
  }
}
