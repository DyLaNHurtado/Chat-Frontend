import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export default class ChatService {

    urlBack = "http://localhost:8082";

    constructor(private http: HttpClient){}

    public getAllUsuarios(){
        return this.http.get(this.urlBack + "/usuarios");
    }
}