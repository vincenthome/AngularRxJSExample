import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { MyCreationFunctionComponent } from './my-creation-function/my-creation-function.component';
import { MyOperatorComponent } from './my-operator/my-operator.component';
import { MyDeclarativeReactAsyncComponent } from './my-declarative-react-async/my-declarative-react-async.component';
import { MyMapComponent } from './my-map/my-map.component';
import { MyCombineComponent } from './my-combine/my-combine.component';
import { MyActionComponent } from './my-action/my-action.component';

@NgModule({
  declarations: [
    AppComponent,
    MyObservableComponent,
    PathNotFoundComponent,
    MyCreationFunctionComponent,
    MyOperatorComponent,
    MyDeclarativeReactAsyncComponent,
    MyMapComponent,
    MyCombineComponent,
    MyActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
