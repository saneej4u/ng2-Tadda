import { Injectable, EventEmitter } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Company } from './company.model'

@Injectable()
export class SettingsService {

  onLogoUploadCompleteEmit: EventEmitter<string> = new EventEmitter<string>();
  baseUrl: string = '';

  constructor(private http: Http, private router: Router) {
   // this.baseUrl = "http://localhost/Tadda.WebApi/";
     this.baseUrl = "http://taddatech.azurewebsites.net/";
  }


  SaveCompany(company: Company): Observable<Company> {

       console.log("SaveCompany Clicked");
       
    let authToken = localStorage.getItem('currentuser');
    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'api/tadda/company/update', JSON.stringify(company), options)
      .map((res: Response) => {
        let body = res.json();

        return body || {};
      })
      .catch(this.handleError);

  }

  SaveAddress() {

  }

  OnUploadComplete(imagePath: string) {
    this.onLogoUploadCompleteEmit.emit(imagePath);
  }



  private extractData(res: Response) {
    let body = res.json();
    console.log("Extract Data : " + JSON.stringify(body));
    return body || {};
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
    //  return Observable.throw(errMsg);
    return Observable.throw(error.status);
  }

}
