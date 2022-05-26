import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPage } from './help.page';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {
    path: '',
    component: HelpPage
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPageRoutingModule {}
