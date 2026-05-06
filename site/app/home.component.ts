import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzCardComponent, NzTypographyComponent],
  styles: [`
    .page {
      min-height: 100vh;
      padding: 40px 48px 24px;
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

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    li {
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
  `],
  template: `
    <div class="page">
      <h1 nz-title>Perpetual Limited</h1>
      <p class="section-label">Builder Tips</p>

      <div class="cards">
        <nz-card nzTitle="Quick Start" nzSize="small">
          <ul>
            <li>Paste a Figma design into the chat to generate components</li>
            <li>Select an element first, then prompt — it's more targeted</li>
            <li>Use Design Mode to tweak styles visually without prompting</li>
            <li>Take a screenshot of the output and paste it back to refine</li>
          </ul>
        </nz-card>

        <nz-card nzTitle="Best Practices" nzSize="small">
          <ul>
            <li>Get the design right before adding functionality</li>
            <li>Add rules in .builderrules or AGENTS.md so Builder follows your code conventions automatically</li>
          </ul>
        </nz-card>

        <nz-card nzTitle="Iterate" nzSize="small">
          <ul>
            <li>Treat it like a conversation — give specific feedback, not "make it better"</li>
            <li>Include screenshots when something doesn't look right</li>
            <li>Paste a Jira/Linear ticket for full context on what you're building</li>
          </ul>
        </nz-card>
      </div>
    </div>
  `
})
export class HomeComponent {}
