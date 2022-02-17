import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

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
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
  //   lastName: new FormControl({ value: 'Akbar', disabled: true}),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //     pinCode: new FormControl()
  //   })
  // });

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
    this.contactForm.get("firstName").statusChanges.subscribe(newStatus=> {
      console.log('firstname status changed')
      console.log(newStatus)                                   //latest status
      console.log(this.contactForm.get("firstName").status)  //latest status
      console.log(this.contactForm.status)                   //Previous status
    });

    this.contactForm.statusChanges.subscribe(newStatus=> {
      console.log(this.contactForm)
      console.log('ContactFormStatus: ', newStatus)                                   //latest status
    })
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

  setFirstNameWithOnlySelf() {
    this.contactForm.get('firstName').setValue('test', {onlySelf: true})
  }

  setFirstNameWithEmitEventFalse() {
    this.contactForm.get('firstName').setValue('testasdfasdf', {emitEvent: false})
  }

  markFirstNameAsTouched() {
    this.contactForm.get('firstName').markAsTouched();
  }

  markFirstNameAsDirty() {
    this.contactForm.get('firstName').markAsDirty();
  }

  markFirstNameAsPristine() {
    this.contactForm.get('firstName').markAsPristine();
  }

  markFirstNameAsPending() {
    // emits event thus you can set eventEmit option in arguments
    this.contactForm.get('firstName').markAsPending();
  }

  disableFirstName() {
    // emits event thus you can set eventEmit option in arguments
    this.contactForm.get('firstName').disable();
  }

  enableFirstName() {
    // emits event thus you can set eventEmit option in arguments
    this.contactForm.get('firstName').enable();
  }

  updateValueAndValidityOfFirstName() {
    // emits event thus you can set eventEmit option in arguments
    this.contactForm.get('firstName').updateValueAndValidity();
  }

  updateValueAndValidityOfForm() {
    // emits event thus you can set eventEmit option in arguments
    this.contactForm.updateValueAndValidity();
  }

  setFirstNameValidators() {
    this.contactForm.get('firstName').setValidators([Validators.required]);
    this.contactForm.get('firstName').updateValueAndValidity();
  }

  clearFirstNameValidators() {
    this.contactForm.get('firstName').clearValidators();
    this.contactForm.get('firstName').updateValueAndValidity();
  }

  getFirstNameErrors() {
    const controlErrors: ValidationErrors = this.contactForm.get('firstName').errors;
    console.log(controlErrors)
  }

  getFirstNameError() {
    console.log(this.contactForm.get('firstName').getError('required'));
  }

  hasFirstNameError() {
    console.log(this.contactForm.get('firstName').hasError('required'));
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
