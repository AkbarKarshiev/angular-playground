import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-form-arrays',
  templateUrl: './reactive-forms-form-arrays.component.html',
  styleUrls: ['./reactive-forms-form-arrays.component.scss']
})
export class ReactiveFormsFormArraysComponent {
  skillsForm: FormGroup;
  empForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([])
    });

    this.empForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  get employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    })
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  addEmployee() {
    this.employees.push(this.newEmployee());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  removeEmployee(i: number) {
    this.employees.removeAt(i);
  }

  employeeSkills(i: number): FormArray {
    return this.employees.at(i).get('skills') as FormArray;
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.skillsForm)
  }

  onSubmitEmployee() {
    console.log(this.empForm)
  }
}
