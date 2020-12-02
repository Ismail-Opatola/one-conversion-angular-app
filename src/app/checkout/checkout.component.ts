import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  FormArray,
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
  // items: FormArray;
  formBuilder: FormBuilder;

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
    this.checkoutForm.get('items').setValue([{
      itemId: ['1'],
      itemName: ['Learning'],
      itemDesc: ['Angular 9'],
      itemDone: [null, Validators.requiredTrue]
    }]);

    console.log(this.checkoutForm.get('items').value.length);
    console.log(this.checkoutForm.get('items').value);
    console.log(this.checkoutForm.get('items').value[0].itemName);

    this.checkoutForm.get('items').reset();

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


  get items(): FormArray {
    return this.checkoutForm.get('items') as FormArray;
  }

  // insert new item into the FormArray
  addNewItem = () => {
    const itemLength = this.items.length;
    const newItem = this.formBuilder.group({
      itemId: [itemLength + 1],
      itemName: [''],
      itemDesc: [''],
      itemDone: [null, Validators.requiredTrue],
    });

    this.items.push(newItem);
    console.log(`added new item feilds`);
  }

  removeItem = (itemIndex: number) => {
    this.items.removeAt(itemIndex);
    console.log(`removed item ${itemIndex} fields`);
  }
}
