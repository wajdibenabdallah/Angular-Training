import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './Tasks/content/content.component';
import { TemplateComponent } from './Tasks/template/template.component';
import { LifeCycleComponent } from './Tasks/life-cycle/life-cycle.component';
import { InputOutputComponent } from './Tasks/input-output/input-output.component';
import { DirectiveComponent } from './Tasks/directives/directives.component';

const routes: Routes = [
  { path: '', redirectTo: 'directive', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'directive', component: DirectiveComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
