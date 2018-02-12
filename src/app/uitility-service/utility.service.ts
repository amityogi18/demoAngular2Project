import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UtilityService {
 private hostnameListUrl = 'assets/hostnamelist.json';

  constructor(private http: HttpClient) {  }

  private extractData(res: Response) {
    // const body = res.json();
    // return body.data || {};
  }

  // handleError(error) {

  // }


  // getHeaders(){
  //   return new Headers({'Content-Type': 'application/json'});
  // }

  // getHostName() {
  //   debugger;
  //   const options = this.getHeaders();
  //   this.http.get(this.hostnameList, options).map((res: Response) => {
  //     debugger;
  //     this.extractData(res);
  //   });
  //  }

  getHostName() {
    return this.http.get(this.hostnameListUrl);
  }

}
