import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  DownloadOutline,
  PlusOutline,
  SearchOutline,
  UserOutline,
  SettingOutline,
  HeartOutline,
  LikeOutline,
  BellOutline,
  CheckCircleOutline,
  CloseCircleOutline,
  InfoCircleOutline,
  ExclamationCircleOutline
} from '@ant-design/icons-angular/icons';
import { provideNzIcons } from 'ng-zorro-antd/icon';

import { ShellComponent } from './app/shell.component';
import { routes } from './app/app.routes';

bootstrapApplication(ShellComponent, {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes),
    provideNzIcons([
      DownloadOutline,
      PlusOutline,
      SearchOutline,
      UserOutline,
      SettingOutline,
      HeartOutline,
      LikeOutline,
      BellOutline,
      CheckCircleOutline,
      CloseCircleOutline,
      InfoCircleOutline,
      ExclamationCircleOutline
    ])
  ]
}).catch(err => console.error(err));
