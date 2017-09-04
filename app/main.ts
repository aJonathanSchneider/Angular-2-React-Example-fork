//import {bootstrap}    from 'angular2/platform/browser'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module'

//bootstrap(AppComponent);

//import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);