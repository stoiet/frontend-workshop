import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ApplicationModule } from './module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(ApplicationModule);
