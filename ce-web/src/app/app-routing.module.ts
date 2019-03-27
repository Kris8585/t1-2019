import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';


const routes: Routes = [
  { path: 'noticiasList', component: NoticiasListComponent },
  { path: 'noticiasEdit/:id', component: NoticiasUpsertComponent},
  { path: 'noticiasInsert', component: NoticiasUpsertComponent},
  
  { path: '**', pathMatch: 'full', redirectTo: 'noticiasList' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
