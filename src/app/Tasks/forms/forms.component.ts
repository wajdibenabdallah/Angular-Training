import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  name: FormControl;
  surname: FormControl;

  ngOnInit() {
    this.form = this.fb.group({
      name: ['ali'],
      surname: new FormControl(''),
      list: this.fb.array([this.fb.control('')]),
      date: [new Date().toISOString().substring(0,10)]
    })
  }

  currentDate() {
    const currentDate = new Date().toISOString().substring(0,10);
    return currentDate;
  }

  onSubmit(data: FormGroup): void {
    console.log(data.value);
  }

  onUpdate(): void {
    this.form.patchValue({
      name: 'wajdi',
      surname: 'bA'
    })
  }

  get list(): FormArray {
    return this.form.get('list') as FormArray;
  }

  addInput(): void {
    this.list.push(this.fb.control(''));
    console.log(this.list);
  }
}
