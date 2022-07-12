import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MenuComponent } from './menu/menu.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: '',   redirectTo: '/menu', pathMatch: 'full' },
  {path: 'contacts', component:ContactListComponent},
  {path: 'contact/:id', component: ContactDetailComponent},
  {path: 'whatsapp', component: MessageListComponent},
  {path: 'whatsapp/:userId', component:MessageDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
