import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfinitescrollComponent } from './infinitescroll/infinitescroll.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { nameReducer } from './store/name.reducer';


@NgModule({
  declarations: [
    AppComponent,
    InfinitescrollComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({name:nameReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
