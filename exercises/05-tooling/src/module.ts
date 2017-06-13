import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApplicationComponent } from './components';

@NgModule({
  bootstrap: [ApplicationComponent],
  declarations: [ApplicationComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [BrowserModule]
})
export class ApplicationModule {}
