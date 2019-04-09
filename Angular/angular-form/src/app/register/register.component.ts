import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{FormControl} from '@angular/forms';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
ngOnInit() {
this.registerForm = new FormGroup({
email: new FormControl('',[Validators.required, Validators.email]),
password: new FormControl('',[Validators.required, Validators.min(6)]),
confirmPassword: new FormControl('')
});

this.registerForm = new FormGroup({
email: new FormControl(''),
pwGroup: new FormGroup({
password: new FormControl(''),
confirmPassword: new FormControl('')
})
});
}
}
