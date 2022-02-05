import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  countryList: { id: string; name: string }[] = [
    { id: '1', name: "Uzbekistan" },
    { id: '2', name: "USA" },
    { id: '3', name: "England" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }
}
