import { Component, OnInit,Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  
  @Input() contact!: Contact;

  constructor() { }
 
  
  ngOnInit(): void {
  }

}
