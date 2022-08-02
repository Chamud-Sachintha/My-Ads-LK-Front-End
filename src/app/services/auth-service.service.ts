import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

	isLoggedIn() {
		return sessionStorage.getItem("user") != null;
	}

	checkUserAlreadyExists(userEmail: string): Observable<User> {
		const baseURI = environment.baseURI + "auth/check" + "?email=" + userEmail;
		return this.http.get<User>(`${baseURI}`);
	}

	registerUserDetails(newUserDetails: User): Observable<User[]> {
		//post requuest
		console.log(newUserDetails);
		const baseURI = environment.baseURI + "auth";
		return this.http.post<User[]>(`${baseURI}`, newUserDetails);
	}

	checkUserLogin(loginUserDetails: User): Observable<User[]> {
		const baseURI = environment.baseURI + "auth/" + "sign-in?" +
			"email=" + loginUserDetails.emailAddress +
			"&password=" + loginUserDetails.userPass;

		return this.http.get<User[]>(`${baseURI}`);
	}

	getClientByEmailAddress(loginEmailAddress: string): Observable<User> {
		const baseURI = environment.baseURI + "auth/" + "byEmail"
			+ "?email=" + loginEmailAddress;

		return this.http.get<User>(`${baseURI}`);
	}

}
