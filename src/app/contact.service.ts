import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 

  constructor(private https:HttpClient) { }

  getContacts():Observable<Contact[]>{
    return this.https.get<Contact[]>('api/contacts')
  }

  getContact(id:number):Observable<Contact>{
    return this.https.get<Contact>('api/contacts/' + id)
  }

  updateContact(contact:Contact):Observable<Contact[]>{
    return this.https.put<Contact[]>('api/contacts', contact);
  }

  addContact(contact: Contact):Observable<Contact>{
    return this.https.post<Contact>('api/contacts', contact)
  }

  deleteContact(id:number):Observable<Contact>{
    return this.https.delete<Contact>('api/contacts/' + id);
  }

  searchContactByFirstname(search: string):Observable<Contact[]>{
    return this.https.get<Contact[]>('api/contacts/?firstname=' + search);
  }

  searchContactByLastname(search: string):Observable<Contact[]>{
    return this.https.get<Contact[]>('api/contacts/?lastname=' + search);
  }
  
}
