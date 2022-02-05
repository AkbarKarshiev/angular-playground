import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

export class contact {
  firstName : string;
  lastName: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  contact = new contact();

  countryList: { id: string; name: string }[] = [
    { id: '1', name: "Uzbekistan" },
    { id: '2', name: "USA" },
    { id: '3', name: "England" },
  ]

  constructor() { }

  ngOnInit(): void {
    this.contact = {
      firstName: "Akbar",
      lastName: "Karshiev",
      email: "mail@gmail.com",
      gender: "male",
      isMarried: false,
      country: "1",
      address: { city: "Tashkent", street: "Wide rng", pincode: "400050" }
    }
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }

  setDefaults() {
    this.contact = {
      firstName: "Akbar",
      lastName: "Karshiev",
      email: "mail@gmail.com",
      gender: "male",
      isMarried: false,
      country: "1",
      address: { city: "Tashkent", street: "Wide rng", pincode: "400050" }
    }
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }
}
