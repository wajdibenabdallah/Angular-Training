import { NgModule } from '@angular/core';

import { InputOutputComponent } from './input-output.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

// todo imports modules instead !!
@NgModule({
  declarations: [InputOutputComponent, ParentComponent, ChildComponent],
  bootstrap: [InputOutputComponent],
})
export class InputOutputModule {}
