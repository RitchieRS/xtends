import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XtendLevelsComponent } from './xtend-levels.component';

const routes: Routes = [
  {
    path: '',
    component: XtendLevelsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class XtendLevelsRoutingModule {}
