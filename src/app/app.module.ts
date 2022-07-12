import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';

import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactDetailComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1000 }
    ),HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
