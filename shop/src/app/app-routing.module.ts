import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {SklepComponent} from './sklep/sklep.component';
import {ArtykulyComponent} from './artykuly/artykuly.component';
import {FormularzComponent} from './formularz/formularz.component';
import {KoszykComponent} from './koszyk/koszyk.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'koszyk',
    component: KoszykComponent
  },
  {
    path: 'artykuly', children: [
      {path: '', component: SklepComponent},
      {path: 'nowy', component: FormularzComponent},
      {path: ':id', component: FormularzComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
