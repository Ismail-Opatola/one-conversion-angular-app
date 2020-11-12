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
  }

  postData = () => {
    console.log(this.checkoutForm.value);
  }
}
