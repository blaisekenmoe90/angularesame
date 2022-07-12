import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

}
