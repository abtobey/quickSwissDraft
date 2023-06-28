import { DraftComponent } from './draft/draft.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayersComponent } from './add-players/add-players.component';

const routes: Routes = [
  { path: '', redirectTo: '/addplayers', pathMatch: 'full' },
  { path: 'addplayers', component: AddPlayersComponent },
  { path: 'draft', component: DraftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
