import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { scoreGuard } from '../../shared/guards/score.guard';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'detalle/:name',
    component: DetailComponent,
    canActivate: [scoreGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
