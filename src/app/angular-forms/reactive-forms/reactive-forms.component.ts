import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  countryList: { id: string; name: string }[] = [
    { id: '1', name: "Uzbekistan" },
    { id: '2', name: "USA" },
    { id: '3', name: "England" },
  ]

  contactForm = new FormGroup({
    firstName: new FormControl({ value: 'Akbar', disabled: true}),
    lastName: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pinCode: new FormControl()
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }
}
