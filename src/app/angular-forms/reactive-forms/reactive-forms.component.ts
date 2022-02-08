import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

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

  // contactForm = new FormGroup({
  //   firstName: new FormControl({ value: 'Akbar', disabled: true}),
  //   lastName: new FormControl('', [Validators.required, Validators.minLength(10)]),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //     pinCode: new FormControl()
  //   })
  // })

  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
    lastName: [{value: 'test', disabled: true}],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    isMarried: ['', [Validators.required]],
    country: ['', [Validators.required]],
    address: this.formBuilder.group({
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
    })
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get("address").get('city');
  }

  get street() {
    return this.contactForm.get("address").get('street');
  }

  get pinCode() {
    return this.contactForm.get("address").get('pinCode');
  }

  onSubmit() {
    console.log(this.contactForm.controls);

  }
}
