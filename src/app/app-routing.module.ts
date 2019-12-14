import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReservasComponent} from "./reservas/reservas.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HomeComponent.URL},
  {path: HomeComponent.URL, component: HomeComponent},
  {path: ReservasComponent.URL, component: ReservasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
