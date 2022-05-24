import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'Formulario', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
