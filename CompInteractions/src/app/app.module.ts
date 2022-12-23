import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ParentComponent } from './ChildToParent/parent/parent.component';
 import { Child1Component } from './ChildToParent/child1/child1.component';
 import { Child2Component } from './ParentToChild/child2/child2.component';
 import { Parent2Component } from './ParentToChild/parent2/parent2.component';
import { CountDownTimerComponent } from './ParentInteractChild/count-down-timer.component';
import { CountDownParentComponent } from './ParentInteractChild/count-down-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Parent2Component,
    CountDownTimerComponent,
    CountDownParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
