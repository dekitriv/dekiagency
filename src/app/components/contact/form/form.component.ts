import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IMessageRequest } from 'src/app/interfaces/i-message';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullname: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      message: this.formBuilder.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  contactFormData() {
    let formVal: IMessageRequest = this.form?.getRawValue();

    let data: IMessageRequest = {
      fullname: formVal.fullname,
      email: formVal.email,
      message: formVal.message,
    };

    return data;
  }

  dataTransfer() {
    if (this.form.valid) {
      let data = this.contactFormData();
      console.log(data);
    } else {
      console.log('Form is not valid');
    }
  }
}
