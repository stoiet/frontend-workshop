import { Component } from '@angular/core';

@Component({
  selector: 'fw-application',
  templateUrl: './index.pug'
})
export class ApplicationComponent {

  public get helloWorld() {
    return 'Hello World!';
  }

}
