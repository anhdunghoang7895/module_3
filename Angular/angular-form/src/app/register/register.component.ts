import { Component, OnInit } from '@angular/core';
import{FormGroup} from '@angular/forms';
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
email: new FormControl(''),
password: new FormControl(''),
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
