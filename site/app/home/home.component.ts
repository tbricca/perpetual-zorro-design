import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTagComponent } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    NzButtonComponent,
    NzCardComponent,
    NzDividerComponent,
    NzIconDirective,
    NzTagComponent,
  ],
  styles: [`
    /* ─── Page wrapper ─── */
    .home-page {
      display: flex;
      flex-direction: column;
    }

    /* ─── Hero ─── */
    .hero {
      background: linear-gradient(135deg, #002655 0%, #1C4E80 60%, #2971BA 100%);
      padding: 64px 24px 72px;
      text-align: center;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at 70% 40%, rgba(41,113,186,0.35) 0%, transparent 60%);
        pointer-events: none;
      }
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 100px;
      padding: 4px 14px;
      margin-bottom: 20px;
      font-size: 12px;
      font-weight: 500;
      color: rgba(255,255,255,0.9);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .hero-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #52c41a;
      flex-shrink: 0;
    }

    .hero-title {
      font-size: 42px;
      font-weight: 700;
      color: #fff;
      line-height: 1.15;
      margin: 0 0 16px;
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: 16px;
      color: rgba(255,255,255,0.72);
      max-width: 520px;
      margin: 0 auto 32px;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ─── Tech Stack bar ─── */
    .tech-bar {
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      padding: 16px 24px;
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    /* ─── Main content ─── */
    .home-content {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 24px 64px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    /* ─── Section ─── */
    .section-head {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 20px;
    }

    .section-title {
      font-size: 20px;
      font-weight: 600;
      color: #141414;
      margin: 0;
    }

    .section-count {
      font-size: 13px;
      color: #8c8c8c;
    }

    /* ─── Tips cards ─── */
    .tips-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .tip-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      font-size: 18px;
    }

    .tip-icon.blue { background: #e6f4ff; color: #1677ff; }
    .tip-icon.green { background: #f6ffed; color: #52c41a; }
    .tip-icon.orange { background: #fff7e6; color: #fa8c16; }

    .tip-card-title {
      font-size: 15px;
      font-weight: 600;
      color: #141414;
      margin: 0 0 10px;
    }

    .tip-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .tip-item {
      font-size: 13.5px;
      line-height: 1.55;
      color: #595959;
      display: flex;
      gap: 8px;
      align-items: flex-start;
    }

    .tip-item-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #d9d9d9;
      flex-shrink: 0;
      margin-top: 7px;
    }

    /* ─── Explore cards ─── */
    .explore-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .explore-card-inner {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .explore-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
      font-size: 22px;
    }

    .explore-icon.blue { background: #e6f4ff; color: #1677ff; }
    .explore-icon.navy { background: #e8eef5; color: #002655; }

    .explore-card-title {
      font-size: 16px;
      font-weight: 600;
      color: #141414;
      margin: 0 0 6px;
    }

    .explore-card-desc {
      font-size: 13.5px;
      color: #8c8c8c;
      line-height: 1.55;
      margin: 0 0 16px;
    }

    .explore-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13.5px;
      font-weight: 500;
      color: #1677ff;
      text-decoration: none;

      &:hover { color: #0958d9; }

      &.navy-link { color: #002655; &:hover { color: #1C4E80; } }
    }

    /* ─── Responsive ─── */
    @media (max-width: 768px) {
      .hero-title { font-size: 28px; }

      .tips-grid,
      .explore-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
  template: `
    <div class="home-page">

      <!-- ═══════════════ HERO ═══════════════ -->
      <div class="hero">
        <div class="hero-eyebrow">
          <span class="hero-dot"></span>
          Perpetual Limited
        </div>

        <h1 class="hero-title">
          Zorro Angular<br>Starter Template
        </h1>

        <p class="hero-subtitle">
          A production-ready Angular 21 application using the ng-zorro-antd component library,
          built with signals, standalone components, and Ant Design.
        </p>

        <div class="hero-actions">
          <a routerLink="/showcase">
            <button nz-button nzType="primary" nzSize="large">
              <span nz-icon nzType="appstore"></span>
              Explore Components
            </button>
          </a>
          <a routerLink="/definitions">
            <button nz-button nzSize="large"
              style="background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.3); color: #fff;">
              <span nz-icon nzType="layout"></span>
              View Example Page
            </button>
          </a>
        </div>
      </div>

      <!-- ═══════════════ TECH STACK ═══════════════ -->
      <div class="tech-bar">
        <nz-tag nzColor="blue">Angular 21</nz-tag>
        <nz-tag nzColor="geekblue">ng-zorro-antd</nz-tag>
        <nz-tag nzColor="purple">TypeScript Strict</nz-tag>
        <nz-tag nzColor="cyan">Ant Design</nz-tag>
        <nz-tag nzColor="green">Standalone Components</nz-tag>
        <nz-tag nzColor="orange">Signals</nz-tag>
      </div>

      <!-- ═══════════════ MAIN CONTENT ═══════════════ -->
      <div class="home-content">

        <!-- ── Builder Tips ── -->
        <section>
          <div class="section-head">
            <h2 class="section-title">Builder Tips</h2>
            <span class="section-count">Get the most out of Fusion</span>
          </div>

          <div class="tips-grid">
            <!-- Quick Start -->
            <nz-card [nzHoverable]="true">
              <div class="tip-icon blue">
                <span nz-icon nzType="rocket"></span>
              </div>
              <p class="tip-card-title">Quick Start</p>
              <ul class="tip-list">
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Paste a Figma design into the chat to generate components
                </li>
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Select an element first, then prompt — it's more targeted
                </li>
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Use Design Mode to tweak styles visually without prompting
                </li>
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Take a screenshot of the output and paste it back to refine
                </li>
              </ul>
            </nz-card>

            <!-- Best Practices -->
            <nz-card [nzHoverable]="true">
              <div class="tip-icon green">
                <span nz-icon nzType="bulb"></span>
              </div>
              <p class="tip-card-title">Best Practices</p>
              <ul class="tip-list">
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Get the design right before adding functionality
                </li>
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Add rules in .builderrules or AGENTS.md so Builder follows your code conventions automatically
                </li>
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Keep components small and focused on a single responsibility
                </li>
              </ul>
            </nz-card>

            <!-- Iterate -->
            <nz-card [nzHoverable]="true">
              <div class="tip-icon orange">
                <span nz-icon nzType="thunderbolt"></span>
              </div>
              <p class="tip-card-title">Iterate</p>
              <ul class="tip-list">
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Treat it like a conversation — give specific feedback, not "make it better"
                </li>
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Include screenshots when something doesn't look right
                </li>
                <li class="tip-item">
                  <span class="tip-item-dot"></span>
                  Paste a Jira/Linear ticket for full context on what you're building
                </li>
              </ul>
            </nz-card>
          </div>
        </section>

        <nz-divider></nz-divider>

        <!-- ── Explore ── -->
        <section>
          <div class="section-head">
            <h2 class="section-title">Explore</h2>
            <span class="section-count">2 pages ready to go</span>
          </div>

          <div class="explore-grid">
            <!-- Component Showcase -->
            <nz-card [nzHoverable]="true">
              <div class="explore-card-inner">
                <div class="explore-icon blue">
                  <span nz-icon nzType="appstore"></span>
                </div>
                <h3 class="explore-card-title">Component Showcase</h3>
                <p class="explore-card-desc">
                  Browse the full ng-zorro-antd component library — buttons, forms, data display,
                  feedback, and more — all rendered live with interactive examples.
                </p>
                <a class="explore-link" routerLink="/showcase">
                  View Showcase <span nz-icon nzType="arrow-right"></span>
                </a>
              </div>
            </nz-card>

            <!-- Definitions Page -->
            <nz-card [nzHoverable]="true">
              <div class="explore-card-inner">
                <div class="explore-icon navy">
                  <span nz-icon nzType="layout"></span>
                </div>
                <h3 class="explore-card-title">Figma Design - Setup — Definition</h3>
                <p class="explore-card-desc">
                  A pixel-perfect implementation of a complex admin interface from Figma — complete
                  with sidebar navigation, breadcrumbs, and interactive toggle controls.
                </p>
                <a class="explore-link navy-link" routerLink="/definitions">
                  View Page <span nz-icon nzType="arrow-right"></span>
                </a>
              </div>
            </nz-card>
          </div>
        </section>

      </div>
    </div>
  `
})
export class HomeComponent {}
