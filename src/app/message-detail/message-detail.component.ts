import { Component, OnInit,Input} from '@angular/core';
import { CONTACTS } from 'src/mock-contacts';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Contact } from '../contact';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { Answer } from 'src/answer';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
 
  messageToAdd: string = "";
  messages:Message[] = [];
  contact!:Contact;
  @Input() id: number = Number(this.activatedRoute.snapshot.params['userId']); // preleva il valore userId dall'url, lo casta a number e lo salva nella varabile id
  contacts = CONTACTS;
 


  constructor( private location: Location, 
    private activatedRoute: ActivatedRoute, 
    private contactService: ContactService,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    this.getContacts();

    this.getMessages();
  }

  goBack():void{
    this.location.back();
  }

  
  getContacts(){
    this.contactService.getContact(Number(this.id)).subscribe(data => {
      this.contact = data; 
    })
  }

  getMessages(){
  this.messageService.getMessages().subscribe(data => {
   this.messages = data.filter(data => data.userId == this.id); 
  
  })
  }
  
  searchAMessage(message: string):void {
    this.messageService.searchMessage(message).subscribe(response => {
      this.messages = response.filter(data => data.id == this.id);
    })
  }

 

  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(h => h !== this.contact);

    this.contactService.deleteContact(this.contact.id).subscribe();
  }
}


    

   



