import { Component, OnInit,Input,ContentChild, } from '@angular/core';



import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';



@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact!:Contact;  
  id: number =  Number(this.activatedRoute.snapshot.params['id']);
  deleteContact?:any;
  


 
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService:ContactService,
    private location: Location,
  ) { }


  ngOnInit(): void {
    if(this.id==0){
      this.contact = {
        id: this.id,
      } as Contact
    }
    else{
      this.contactService.getContact(this.id).subscribe(data => {
        this.contact = data;     
    })
    }
      
  }
  
  addNewContact(firstname:string, lastname:string, email:string, type:string){
    let newContact:Contact = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      type: type,
    }as Contact;
    this.contactService.addContact(newContact).subscribe(data=>{
      this.goBack();
    })
  }

  goBack():void{
    this.location.back();
  }

  updateContactDetails() {
    this.contactService.updateContact(this.contact).subscribe(data => {
      this.goBack();
    })
  }

  deleteCurrentContact(id:number):void{this.contactService.deleteContact(id).subscribe(()=>{this.goBack()});
  }

  save(): void {
    if (this.contact) {
      this.contactService.updateContact(this.contact)
        .subscribe(() => this.goBack());
    }
  }
}
