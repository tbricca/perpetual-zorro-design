import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home.component';

bootstrapApplication(HomeComponent, {
  providers: [provideAnimationsAsync()]
}).catch(err => console.error(err));
