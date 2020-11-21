import { HorizontalBarComponent } from './charts/bar/horizontal-bar/horizontal-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "demos/bar/horizontal",
    component: HorizontalBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
