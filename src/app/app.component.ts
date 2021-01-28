import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // user = {name: 'kokos', age: 123};
  //
  // checkForm(myForm: NgForm): void {
  //   console.log(myForm);
  // }


  name = new FormControl('', [Validators.required, Validators.minLength(10), this.fukcValidator]);
  age = new FormControl('', Validators.required);
  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  action(): void {
    console.log(this.myForm);
  }

  fukcValidator(inputData: AbstractControl): any {
    console.log(inputData.value);
    if (inputData.value.includes('fukc')) {
      console.log('if');
      return {fukc: true, msg: 'fukc is presented'};
    }

    return null;


  }
}
