import { Component, OnInit,Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

    
  @Input() contact!: Contact;
  
  constructor() { }

  ngOnInit(): void {
  }

}
