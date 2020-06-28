import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { MyCreationFunctionComponent } from './my-creation-function/my-creation-function.component';
import { MyOperatorComponent } from './my-operator/my-operator.component';
import { MyDeclarativeReactAsyncComponent } from './my-declarative-react-async/my-declarative-react-async.component';
import { MyMapComponent } from './my-map/my-map.component';
import { MyCombineComponent } from './my-combine/my-combine.component';
import { MyActionComponent } from './my-action/my-action.component';


const routes: Routes = [
  { path: 'o', component: MyObservableComponent },
  { path: 'cf', component: MyCreationFunctionComponent },
  { path: 'op', component: MyOperatorComponent },
  { path: 'dra', component: MyDeclarativeReactAsyncComponent },
  { path: 'map', component: MyMapComponent },
  { path: 'combine', component: MyCombineComponent },
  { path: 'action', component: MyActionComponent },

  { path: '', pathMatch: 'full', redirectTo: 'o' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
