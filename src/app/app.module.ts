import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponentComponent } from './grocery-component/grocery-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryComponentComponent,
    CartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
