import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LiveComponent } from './main/live/live.component';
import { OverviewComponent } from './main/overview/overview.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'live/:symbol', component: LiveComponent },
  { path: 'overview', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
