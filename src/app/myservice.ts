import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class myService {
    constructor(public http: HttpClient) {
    }

    getRequest() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos");
    }
}


