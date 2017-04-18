import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { AuthHttp } from "../auth.http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Deal } from "../models/deal";
@Injectable()
export class DealService {
  constructor(private http: AuthHttp) { }
  private baseUrl = "http://localhost:2676/Deal/"; // web api URL

  getDeal(id: string) {
    var url = this.baseUrl + "GetDeal/";
    if (id != null) { url += id; }
    return this.http.get(url).map(response => response.json()).catch(this.handleError);
  }

  getDeals() {
    var url = this.baseUrl + "GetDeals/";
    return this.http.get(url).map(response => response.json()).catch(this.handleError);
  }

  getMyJoinedDeals() {
    var url = this.baseUrl + "GetMyJoinedDeals/";
    return this.http.get(url).map(response => response.json()).catch(this.handleError);
  }

  getMyWatchingDeals() {
    var url = this.baseUrl + "GetMyWatchingDeals/";
    return this.http.get(url).map(response => response.json()).catch(this.handleError);
  }

  get(id: string) {
    if (id == null) { throw new Error("id is required."); }
    var url = this.baseUrl + "GetDeal/" + id;
    return this.http.get(url).map(res => <Deal>res.json()).catch(this.handleError);
  }

  add(deal: Deal) {
    var url = this.baseUrl;
    return this.http.post(url, JSON.stringify(deal), this.getRequestOptions()).map(response => response.json()).catch(this.handleError);
  }

  update(deal: Deal) {
    var url = this.baseUrl + deal.Id;
    return this.http.put(url, JSON.stringify(deal), this.getRequestOptions()).map(response => response.json()).catch(this.handleError);
  }

  delete(id: string) {
    var url = this.baseUrl + id;
    return this.http.delete(url).catch(this.handleError);
  }

  private getRequestOptions() {
    return new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  }
  private handleError(error: Response) {
    // output errors to the console.
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}