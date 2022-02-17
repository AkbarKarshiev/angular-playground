import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from "@angular/forms";

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
  @ViewChild('contactForm') contactForm: NgForm;

  contact = new contact();

  countryList: { id: string; name: string }[] = [
    { id: '1', name: "Uzbekistan" },
    { id: '2', name: "USA" },
    { id: '3', name: "England" },
  ]

  constructor() { }

  ngOnInit(): void {
    // this.contact = {
    //   firstName: "Akbar",
    //   lastName: "Karshiev",
    //   email: "mail@gmail.com",
    //   gender: "male",
    //   isMarried: false,
    //   country: "1",
    //   address: { city: "Tashkent", street: "Wide rng", pincode: "400050" }
    // };
    //
    // setTimeout(() => {
    //   this.contactForm.setValue(this.contact);
    // })

    setTimeout(() => {
      this.contactForm.control.get('firstName').valueChanges.subscribe(selectedValue => {
        console.log('firstName value changed')
        console.log(selectedValue)
        console.log(this.contactForm.control.get("firstName").value)
        console.log(this.contactForm.control.value)

        this.contactForm.control.get("address").valueChanges.subscribe(selectedValue => {
          console.log('address changed')
          console.log(selectedValue)
        })

        this.contactForm.valueChanges.subscribe(selectedValue => {
          console.log('form value changed')
          console.log(selectedValue)
        })
      });
    })
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }

  setDefaults() {
    this.contactForm.setValue(this.contact);
  }

  reset() {
    this.contactForm.resetForm();
  }

  patchValue() {
    let obj = {
      firstName: "Test",
      lastName: "Playboy",
      email: "emaill@gmail.com",
    };

    this.contactForm.control.patchValue(obj);
  }

  changeAddress() {
    let obj = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600100"
    };
    let address= this.contactForm.controls["address"] as FormGroup;
    address.patchValue(obj);

  }
}
