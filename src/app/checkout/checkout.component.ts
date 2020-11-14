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
      // emailAddress: new FormControl(),
      // quantity: new FormControl(),
      // tos: new FormControl()
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
      ],
      // items: formBuilder.array([
      //   new FormControl('Angular'),
      //   new FormControl('React'),
      // ])
      items: formBuilder.array([
        formBuilder.group({
          itemId: ['1'],
          itemName: ['ARC'],
          itemDesc: ['Tutorials'],
          itemDone: [null, Validators.requiredTrue],
        })
      ])
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

    // listen for status changes on form control
    // @return string - INVALID | VALID
    // this.checkoutForm.get('emailAddress').statusChanges.subscribe(fieldStatus => {
    //   console.log(fieldStatus);
    // });

    // listen for status changes on the entire form control
    // @return string - INVALID | VALID
    this.checkoutForm.statusChanges.subscribe(formStatus => {
      console.log(formStatus);
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
