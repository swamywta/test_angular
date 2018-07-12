import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } frin './edit-client/edit-client.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'create-client', component: CreateClientComponent },
  { path: 'edit-client', component: EditClientComponent },
  { path: 'list', component: ListComponent },
  { path : '**', redirectTo: 'clients'}

];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule, ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
  declarations: [CreateClientComponent, ListComponent]
})
export class ClientsModule { }
