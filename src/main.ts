import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'unity-ambient-x/loader';
defineCustomElements(window);


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
