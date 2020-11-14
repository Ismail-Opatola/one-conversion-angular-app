import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators,
  FormControlName
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  emailAddress: FormControlName;
  quantity: FormControlName;
  tos: FormControlName;

  constructor(formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      emailAddress: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      quantity: [
        null,
        Validators.required
      ],
      tos: [
        null,
        Validators.requiredTrue
      ]
      // emailAddress: new FormControl(),
      // quantity: new FormControl(),
      // tos: new FormControl()
    });
  }

  ngOnInit(): void {

    // listen/read email field value onChange
    // this.checkoutForm.get('emailAddress').valueChanges.subscribe(data => {
    //   console.log(data);
    // });

    // listen/read value changes on entire form
    this.checkoutForm.valueChanges.subscribe(data => {
      console.log(data);
    });

    // override checkForm form fields
    // this.checkoutForm.setValue({
      //   emailAddress: 'test@xyz.com',
      //   quantity: 10,
      //   tos: true
      // });
 
    // update checkForm form fields
    this.checkoutForm.patchValue({
      quantity: 10,
      tos: true
    });
  }

  postData = () => {
    console.log(this.checkoutForm.value);
    this.resetForm();
  }

  resetForm = () => {
    this.checkoutForm.reset();
  }
}
