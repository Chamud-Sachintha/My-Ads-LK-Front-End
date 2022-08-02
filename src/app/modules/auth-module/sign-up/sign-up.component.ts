import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder, private authService: AuthServiceService, private notify: ToastrService) {
    this.registerFormCreate();
  }

  ngOnInit(): void {
  }

  registerFormCreate() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[A-Z]|[a-z]$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[A-Z]|[a-z]$")]],
      emailAddress: ['', [Validators.required, Validators.email]],
      userPass: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if(this.registrationForm.get("userPass")?.value === this.registrationForm.get("repeatPassword")?.value){
      // password doesnt match notification trigger

      this.authService.checkUserAlreadyExists(this.registrationForm.get("emailAddress")?.value).subscribe((data) => {
        if(data != null){
          this.notify.error('User Already Registred.','User Registration');
        }else{
          this.authService.registerUserDetails(this.registrationForm.value).subscribe((result) => {
            this.notify.success('User registration Successfully.','User Registration');
            setTimeout(() => { this.route.navigate(['/auth/sign-in']); }, 2000);
          },
          (err) => {
            this.notify.error('User Registration not Successfully.','User Registration');
          });
        }
      });
    }else{
      //registration ok notification trigger
      this.notify.error('Please Check your Password','User Registration');
    }
  }

}
