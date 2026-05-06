import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  AppstoreOutline,
  ArrowRightOutline,
  BulbOutline,
  CheckCircleOutline,
  CloseCircleOutline,
  CodeOutline,
  DownloadOutline,
  ExclamationCircleOutline,
  HeartOutline,
  InfoCircleOutline,
  LikeOutline,
  PlusOutline,
  RocketOutline,
  SearchOutline,
  SettingOutline,
  ThunderboltOutline,
  UserOutline,
  BellOutline,
  LayoutOutline,
  ApiOutline
} from '@ant-design/icons-angular/icons';
import { provideNzIcons } from 'ng-zorro-antd/icon';

import { ShellComponent } from './app/shell.component';
import { routes } from './app/app.routes';

bootstrapApplication(ShellComponent, {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes),
    provideNzIcons([
      AppstoreOutline,
      ArrowRightOutline,
      BulbOutline,
      CheckCircleOutline,
      CloseCircleOutline,
      CodeOutline,
      DownloadOutline,
      ExclamationCircleOutline,
      HeartOutline,
      InfoCircleOutline,
      LikeOutline,
      PlusOutline,
      RocketOutline,
      SearchOutline,
      SettingOutline,
      ThunderboltOutline,
      UserOutline,
      BellOutline,
      LayoutOutline,
      ApiOutline
    ])
  ]
}).catch(err => console.error(err));
