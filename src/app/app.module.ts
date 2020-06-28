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
import { MyActionMasterComponent } from './my-action-master-detail/components/my-action-master/my-action-master.component';
import { MyActionDetailComponent } from './my-action-master-detail/components/my-action-detail/my-action-detail.component';
import { MyActionMasterDetailComponent } from './my-action-master-detail/my-action-master-detail.component';
import { MyErrorSubjectComponent } from './my-error-subject/my-error-subject.component';

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
    MyActionComponent,
    MyActionMasterComponent,
    MyActionDetailComponent,
    MyActionMasterDetailComponent,
    MyErrorSubjectComponent
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
