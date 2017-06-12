import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { AccountModel } from './account-model';

@Injectable()
export class AccountService {

  baseUrl: string = '';
  public token: string;
  isLoggedIn: boolean = false;
  redirectUrl: string;
  loggenInSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private http: Http) {
    this.baseUrl = "http://localhost/Tadda.WebApi/";
  }


  signUp(model: AccountModel) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'api/tadda/account/registercompany', JSON.stringify(model), options)
      .map(this.extractData)
      .catch(this.handleError);

  }


  login(username: string, password: string): Observable<boolean> {

    var data = "grant_type=password&username=" + username + "&password=" + password;

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.baseUrl + 'oauth2/token', data, options)
      .map((res: Response) => {
        let token = res.json() && res.json().access_token;
        if (token) {
          this.token = token;
          var data = JSON.stringify({ username: username, token: token });
          localStorage.setItem("currentuser", data);
          this.isLoggedIn = true;

          return true;

        }
        else {
          return false;
        }

      }).catch(this.handleError);


  }

  private checkLoginStatus(): Observable<boolean> {

    let authToken = localStorage.getItem('currentuser');

    let tokenId = "";
    if (authToken != null) {
      let authTokenJson = JSON.parse(authToken);
      tokenId = authTokenJson.token;
      let token = "Bearer " + tokenId;
    }

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json ');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + 'api/tadda/enduser/isloggedin', options)
      .map((res: Response) => {
        if (res.status == 401) {
          return false
        }
        else {
          return true;
        }
      }).
      catch(this.handleError);


  }

  IsLoggedIn(): Observable<boolean> {

    this.checkLoginStatus().subscribe((isLoggedS) => {
    }, (error) => {
      this.logout();
    }, () => {

    })


    let authToken = localStorage.getItem('currentuser');

    if (authToken != null) {
      return Observable.of(true);
    }
    else {
      return Observable.of(false);
    }

  }

  logout(): void {
    // clear token remove user from local storage to log user out
    console.log("Logged out...");

    this.token = null;
    localStorage.removeItem('currentuser');

  }


  private extractData(res: Response) {
    let body = res.json();
    console.log("BODY: " + body);

    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(JSON.stringify(errMsg));
    return Observable.throw(errMsg);
  }

}
