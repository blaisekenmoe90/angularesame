import { Component, OnInit,Input,Output } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { ContactService } from '../contact.service';
import { MessageService } from '../message.service';
import { Contact } from '../contact';
import { Message } from '../message';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  selectedContact?: Contact


  message: Message = {
    id: 0,
    userId: 0, 
    type: 'incoming', 
    message: ''
  }

  contacts: Contact[] = [];

  @Input() id: number = Number(this.activatedRoute.snapshot.params['id']); // preleva il valore id dall'url e lo salva nella varabile id

  constructor(private contactService: ContactService,
     private messageService: MessageService,
      private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

 

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }



  getAllContacts(){
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  getAllMessages(){
    this.messageService.getMessages().subscribe(data => {
    })
  }

  getOneAnswer(){
    this.messageService.getRandomMessage().subscribe(data => {
    })
  }

  addNewMessage(){
    this.messageService.addMessage(this.message)
      .subscribe(data => {
      })
    this.getAllMessages();
  }

  searchContactByFirstname(search: string):void {
    this.contactService.searchContactByFirstname(search).subscribe(data => {
      this.contacts = data;
    })
  }
  searchContactByLastname(search: string):void {
    this.contactService.searchContactByLastname(search).subscribe(data=> {
      this.contacts = data;
    })
  }


  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(h => h !== contact);
    this.contactService.deleteContact(contact.id).subscribe();
  }

  add(message: string): void {
    message = message.trim();
    if (!message) { return; }
    this.contactService.addContact({ message } as Contact)
      .subscribe(hero => {
        this.contacts.push(hero);
      });
  }


  }


