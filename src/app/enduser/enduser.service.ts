import { Injectable, EventEmitter } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Enduser} from './enduser.model';
import { Order} from './order.model';
import { Notification} from './notification.model';



import { AccountService } from './../account/account.service';

@Injectable()
export class EnduserService {

  baseUrl: string = '';

  orderCreatedEmit: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(private http: Http, private router: Router, private accountService: AccountService) {
    this.baseUrl = "http://localhost/Tadda.WebApi/";
    //this.baseUrl = "http://taddatech.azurewebsites.net/";

  }

  GetAllEndUser(companyId: number): Observable<Enduser[]> {

    let authToken = localStorage.getItem('currentuser');

    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json ');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + 'api/tadda/enduser/company/' + companyId, options)
      .map(this.extractData).
      catch(this.handleError);
  }

  GetCompanyByUser(email: string): Observable<any> {

    let authToken = localStorage.getItem('currentuser');

    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json ');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + 'api/tadda/company/email/' + email + '/', options)
      .map(this.extractData).
      catch(this.handleError);
  }

  GetAllOrderByEnduser(enduserId): Observable<Order[]> {
    return this.http.get(this.baseUrl + 'api/tadda/order/enduser/' + enduserId + '/all')
      .map(this.extractData).
      catch(this.handleError);

  }





  GetNotificationByOrder(orderId: number): Observable<Notification[]> {

    let authToken = localStorage.getItem('currentuser');

    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json ');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + 'api/tadda/notification/order/' + orderId + '/notifications', options)
      .map(this.extractData).
      catch(this.handleError);
  }

    GetNotificationByEnduser(enduserId: number): Observable<Notification[]> {

    let authToken = localStorage.getItem('currentuser');

    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json ');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + 'api/tadda/notification/enduser/' + enduserId + '/notifications', options)
      .map(this.extractData).
      catch(this.handleError);
  }


  CreateEndUser(user: Enduser) {

    let authToken = localStorage.getItem('currentuser');
    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'api/tadda/enduser/create', JSON.stringify(user), options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  CreateOrder(order: Order): Observable<Order> {

    let authToken = localStorage.getItem('currentuser');
    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'api/tadda/order/create', JSON.stringify(order), options)
      .map((res: Response) => {
        let body = res.json();
        console.log("BODY: " + body);

        this.orderCreatedEmit.emit(body)
        return body || {};
      })
      .catch(this.handleError);
  }


  CreatNotification(notification: Notification): Observable<Notification> {

    let authToken = localStorage.getItem('currentuser');
    let authTokenJson = JSON.parse(authToken);
    let tokenId = authTokenJson.token;
    let token = "Bearer " + tokenId;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'api/tadda/notification/create', JSON.stringify(notification), options)
      .map((res: Response) => {
        let body = res.json();
        return body || {};
      })
      .catch(this.handleError);
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
