import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildContentComponent } from './Tasks/content/child-content/child-content.component';
import { ContentComponent } from './Tasks/content/content.component';
import { TemplateComponent } from './Tasks/template/template.component';
import { LifeCycleComponent } from './Tasks/life-cycle/life-cycle.component';
import { MyChildComponent } from './Tasks/life-cycle/my-child/my-child.component';
import { DirectiveComponent } from './Tasks/directives/directives.component';
import { ColorDirective } from './Tasks/directives/color.directive';

import { InputOutputModule } from './Tasks/input-output/input-output.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildContentComponent,
    ContentComponent,
    TemplateComponent,
    LifeCycleComponent,
    MyChildComponent,
    DirectiveComponent,
    ColorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, InputOutputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
