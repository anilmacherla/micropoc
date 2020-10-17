import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { EntitiesComponent } from './entities/entities.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

let appRoutes = [  
  {path: 'entities',component : EntitiesComponent},
  {path:'admin',component : AdminComponent}  
 ]

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    AdminComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

 
export class AppModule { }






