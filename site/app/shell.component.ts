import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [`
    .app-shell {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .app-header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }

    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      height: 56px;
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .brand-name {
      font-size: 16px;
      font-weight: 700;
      color: #141414;
      letter-spacing: -0.01em;
      flex-shrink: 0;
      text-decoration: none;

      &:hover { color: #1677ff; }
    }

    .header-nav {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .nav-link {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      color: #595959;
      text-decoration: none;
      transition: background 0.15s, color 0.15s;

      &:hover {
        background: #f5f5f5;
        color: #141414;
      }

      &.nav-active {
        background: #e6f4ff;
        color: #1677ff;
      }
    }

    .main-content {
      flex: 1;
    }
  `],
  template: `
    <div class="app-shell">
      @if (!isFullLayout()) {
        <header class="app-header">
          <div class="header-inner">
            <a class="brand-name" routerLink="/">Perpetual Limited</a>
            <nav class="header-nav" role="navigation" aria-label="Main navigation">
              <a class="nav-link"
                 routerLink="/"
                 routerLinkActive="nav-active"
                 [routerLinkActiveOptions]="{exact: true}">
                Home
              </a>
              <a class="nav-link"
                 routerLink="/showcase"
                 routerLinkActive="nav-active">
                Components
              </a>
              <a class="nav-link"
                 routerLink="/definitions"
                 routerLinkActive="nav-active">
                Setup - Definition
              </a>
            </nav>
          </div>
        </header>
      }
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `
})
export class ShellComponent {
  private readonly router = inject(Router);
  readonly isFullLayout = signal(this.router.url.startsWith('/definitions'));

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.isFullLayout.set(e.urlAfterRedirects.startsWith('/definitions'));
      });
  }
}
