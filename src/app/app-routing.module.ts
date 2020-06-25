import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { MyCreationFunctionComponent } from './my-creation-function/my-creation-function.component';
import { MyOperatorComponent } from './my-operator/my-operator.component';
import { MyReactAsyncComponent } from './my-react-async/my-react-async.component';


const routes: Routes = [
  { path: 'o', component: MyObservableComponent },
  { path: 'cf', component: MyCreationFunctionComponent },
  { path: 'op', component: MyOperatorComponent },
  { path: 'ra', component: MyReactAsyncComponent },
  { path: '', pathMatch: 'full', redirectTo: 'o' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
