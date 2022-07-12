import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from 'src/answer';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
   
  getMessages():Observable<Message[]>{
    return this.http.get<Message[]>('api/messages');
  }

  getMessage(userId:number):Observable<Message[]>{
    return this.http.get<Message[]>('api/messages/' + userId);
  }

  addMessage(message: Message):Observable<Message>{
    return this.http.post<Message>('api/messages', message)
  }

  getRandomMessage():Observable<Answer>{
    return this.http.get<Answer>('api/answers/' + (Math.floor(Math.random()* 100)+1));
  }

  updateMessage(message: Message):Observable<Message>{
    return this.http.put<Message>('api/messages/', message);
  }

  searchMessage(search: string):Observable<Message[]>{
    return this.http.get<Message[]>('api/messages/?message=' + search)
  }
}
