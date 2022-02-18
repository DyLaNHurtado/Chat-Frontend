import { Component } from '@angular/core';
import ChatService from '../services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatAngular';

  constructor(private chatService: ChatService) {}

  public readAllUsernames(){
    this.chatService.getAllUsuarios().subscribe((response:any)=>{
      console.log(response);
    }, err=> {
      console.log(err);      
    })
  }

}
