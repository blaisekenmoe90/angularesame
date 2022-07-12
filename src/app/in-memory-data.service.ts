import { Injectable } from '@angular/core';
import { InMemoryDbService, ResponseOptions, RequestInfo } from 'angular-in-memory-web-api';
import { Contact } from './contact';
import { Message } from './message';
import { Answer } from 'src/answer';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {  
    const contacts = JSON.parse(localStorage.getItem('angular/contacts') || 'null') ||
    [ {  id:1,firstname:'kenmoe',lastname:'ghislain',email:'sangroyal@yahoo.com',
      type:'uomo',
      imageUrl:''
  },
  {  id:2, firstname:'boudie',lastname:'blandine',email:'blboudie@yahoo.com',
      type:'feminile',
      imageUrl:''
  },
  {  id:3,firstname:'watchouang',lastname:'grace',email:'gracewatch@yahoo.com',
      type:'feminile',
      imageUrl:''
  },{  id:4,firstname:'meulaje',lastname:'cherif',email:'meulaje@yahoo.com',
      type:'uomo',
      imageUrl:''
  }];
  const messages = JSON.parse(localStorage.getItem('angular/messages') || 'null') || [
      { id: 1, userId: 1, type: 'outcoming', message: 'Ciao Alberto come stai?' },
      { id: 2, userId: 1, type: 'incoming', message: 'Bene grazie! E tu?' },
      { id: 3, userId: 2, type: 'outcoming', message: 'Ciao Blaise come stai?' },
      { id: 4, userId: 2, type: 'incoming', message: 'Bene grazie! E tu?' },
      { id: 5, userId: 3, type: 'outcoming', message: 'Ciao Cristian come stai?' },
      { id: 6, userId: 3, type: 'incoming', message: 'Bene grazie! E tu?' },
      { id: 7, userId: 4, type: 'outcoming', message: 'Ciao Edoardo come stai?' },
      { id: 8, userId: 4, type: 'incoming', message: 'Bene grazie! E tu?' },
       ];
    const answers =[
    {id: 1, answer: 'siamo fati io per te! '},
    {id: 2, answer: 'Basta! Io ti lascio!'},
    {id: 3, answer: 'ti amo'},
    {id: 4, answer: 'anchio ti amo'}]
    
    return { contacts, messages, answers };
  }

  genId<T extends { id: number }>(collection: T[]): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
  }

  responseInterceptor(responseOptions: ResponseOptions, requestInfo: RequestInfo): ResponseOptions {
    localStorage.setItem('angular/' + requestInfo.collectionName, JSON.stringify(requestInfo.collection));
    return responseOptions;
  }
  }






 
