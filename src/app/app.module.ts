import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { TasksService } from './tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './tasks/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
   RouterModule,
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
