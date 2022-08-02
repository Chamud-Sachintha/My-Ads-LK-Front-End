import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private authService: AuthServiceService, private notify: ToastrService) {
    this.createSignInForm();
  }

  createSignInForm() {
		this.signInForm = this.formBuilder.group({
			emailAddress: ['', [Validators.required]],
			userPass: ['', [Validators.required]]
		});
	}

  ngOnInit(): void {
  }

  onSignIn() {
		//check login
		this.authService.checkUserLogin(this.signInForm.value).subscribe((result) => {
			if (result) {
				this.authService.getClientByEmailAddress(this.signInForm.get("emailAddress")?.value).subscribe((result) => {
					console.log(result);
					const fullName = result.firstName + " " + result.lastName;
					this.notify.success('Client login Successfully.', 'Client Login');
					sessionStorage.setItem("user", fullName);
					setTimeout(() => { this.router.navigate(['/app/start-page']) });
				});
			} else {
				this.notify.error('User Email or Password Incorrect.', 'Client Login');
			}
		},
			(err) => {
				this.notify.error('Client Login Not Successfully.', 'Client Login');
			});
	}

}
