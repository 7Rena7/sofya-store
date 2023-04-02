import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-clothe-form',
  templateUrl: './new-clothe-form.component.html',
  styles: [
  ]
})
export class NewClotheFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(50), Validators.pattern('[0-9]+(,[0-9]+)*')]],
      description: [''],
      quantity: ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]],
      photos: [''],
    })

    this.loadData();
  }

  get nameNotValid() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched
  }

  get priceNotValid() {
    return this.form.get('price')?.invalid && this.form.get('price')?.touched
  }

  get descriptionNotValid() {
    return this.form.get('description')?.invalid && this.form.get('description')?.touched
  }

  get quantityNotValid() {
    return this.form.get('quantity')?.invalid && this.form.get('quantity')?.touched
  }

  loadData() {
    this.form.reset({
      name: '',
      price: '',
      description: '',
      quantity: 1,
      photos: ''
    })
  }

  save() {
    console.log(this.form);

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => control.markAsTouched())
    }

    // Post info to DB
  
    this.form.reset()
  }

}
