import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzCardComponent, NzTypographyComponent, RouterLink],
  styles: [`
    .home-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px 48px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    h1[nz-title] {
      margin: 0 !important;
      font-size: 28px !important;
      font-weight: 600 !important;
      color: #141414 !important;
    }

    .section-label {
      font-size: 13px;
      font-weight: 500;
      color: #8c8c8c;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin: 12px 0 12px;
    }

    .tip-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .tip-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .tip-item {
      font-size: 13.5px;
      line-height: 1.5;
      color: #434343;
      padding-left: 14px;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #bfbfbf;
      }
    }

    .showcase-cta {
      margin-top: 24px;
      padding: 20px 24px;
      background: #e6f4ff;
      border-radius: 10px;
      border: 1px solid #bae0ff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }

    .cta-text {
      font-size: 14px;
      color: #0958d9;
      font-weight: 500;
    }

    .cta-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      background: #1677ff;
      color: #fff;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: background 0.15s;

      &:hover {
        background: #0958d9;
      }
    }

    @media (max-width: 768px) {
      .tip-cards {
        grid-template-columns: 1fr;
      }
    }
  `],
  template: `
    <div class="home-page">
      <h1 nz-title>Perpetual Limited</h1>
      <p class="section-label">Builder Tips</p>

      <div class="tip-cards">
        <nz-card nzTitle="Quick Start" nzSize="small">
          <ul class="tip-list">
            <li class="tip-item">Paste a Figma design into the chat to generate components</li>
            <li class="tip-item">Select an element first, then prompt — it's more targeted</li>
            <li class="tip-item">Use Design Mode to tweak styles visually without prompting</li>
            <li class="tip-item">Take a screenshot of the output and paste it back to refine</li>
          </ul>
        </nz-card>

        <nz-card nzTitle="Best Practices" nzSize="small">
          <ul class="tip-list">
            <li class="tip-item">Get the design right before adding functionality</li>
            <li class="tip-item">Add rules in .builderrules or AGENTS.md so Builder follows your code conventions automatically</li>
          </ul>
        </nz-card>

        <nz-card nzTitle="Iterate" nzSize="small">
          <ul class="tip-list">
            <li class="tip-item">Treat it like a conversation — give specific feedback, not "make it better"</li>
            <li class="tip-item">Include screenshots when something doesn't look right</li>
            <li class="tip-item">Paste a Jira/Linear ticket for full context on what you're building</li>
          </ul>
        </nz-card>
      </div>

      <div class="showcase-cta">
        <span class="cta-text">Explore the full ng-zorro-antd component library</span>
        <a class="cta-link" routerLink="/showcase">View Component Showcase &rarr;</a>
      </div>

      <div class="showcase-cta" style="background: #f0f4fa; border-color: #d0ddf5;">
        <span class="cta-text" style="color: #002655;">See the Setup - Definition admin page design</span>
        <a class="cta-link" routerLink="/definitions" style="background: #1C4E80;">View Definitions Page &rarr;</a>
      </div>
    </div>
  `
})
export class HomeComponent {}
