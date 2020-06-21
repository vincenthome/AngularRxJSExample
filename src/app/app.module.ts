import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { MyCreationFunctionComponent } from './my-creation-function/my-creation-function.component';
import { MyOperatorComponent } from './my-operator/my-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    MyObservableComponent,
    PathNotFoundComponent,
    MyCreationFunctionComponent,
    MyOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
