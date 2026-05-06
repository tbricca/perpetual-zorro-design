import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [`
    .app-shell {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .app-header {
      position: sticky;
      top: 0;
      z-index: 200;
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      flex-shrink: 0;
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
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
  `],
  template: `
    <div class="app-shell">
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
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `
})
export class ShellComponent {}
