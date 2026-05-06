import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCardComponent, NzCardMetaComponent } from 'ng-zorro-antd/card';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzProgressComponent } from 'ng-zorro-antd/progress';
import { NzRadioComponent, NzRadioGroupComponent } from 'ng-zorro-antd/radio';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { NzSelectComponent, NzOptionComponent } from 'ng-zorro-antd/select';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import { NzSliderComponent } from 'ng-zorro-antd/slider';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzStatisticComponent } from 'ng-zorro-antd/statistic';
import { NzStepsComponent, NzStepComponent } from 'ng-zorro-antd/steps';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';
import { NzTabComponent, NzTabsComponent } from 'ng-zorro-antd/tabs';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzTimelineComponent, NzTimelineItemComponent } from 'ng-zorro-antd/timeline';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    NzAlertComponent,
    NzAvatarComponent,
    NzBadgeComponent,
    NzButtonComponent,
    NzCardComponent,
    NzCardMetaComponent,
    NzCheckboxComponent,
    NzDividerComponent,
    NzIconDirective,
    NzInputDirective,
    NzInputGroupComponent,
    NzOptionComponent,
    NzProgressComponent,
    NzRadioComponent,
    NzRadioGroupComponent,
    NzRateComponent,
    NzSelectComponent,
    NzSkeletonComponent,
    NzSliderComponent,
    NzSpinComponent,
    NzStatisticComponent,
    NzStepsComponent,
    NzStepComponent,
    NzSwitchComponent,
    NzTabComponent,
    NzTabsComponent,
    NzTagComponent,
    NzTimelineComponent,
    NzTimelineItemComponent,
    NzTypographyComponent
  ],
  styles: [`
    :host {
      display: block;
      flex: 1;
      overflow-y: auto;
    }

    .showcase-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 24px 64px;
    }

    .page-header {
      margin-bottom: 32px;
    }

    .page-title {
      font-size: 24px;
      font-weight: 700;
      color: #141414;
      margin: 0 0 6px;
    }

    .page-subtitle {
      font-size: 14px;
      color: #8c8c8c;
      margin: 0;
    }

    .section-title {
      font-size: 13px;
      font-weight: 600;
      color: #8c8c8c;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin: 24px 0 12px;
    }

    .demo-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }

    .demo-card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 16px;
    }

    .demo-progress-col {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 16px;
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 16px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    .field-label {
      font-size: 13px;
      font-weight: 500;
      color: #434343;
    }

    .spin-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px;
      background: #fafafa;
      border-radius: 8px;
      border: 1px dashed #d9d9d9;
    }

    .avatar-row {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .circle-progress-row {
      display: flex;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    .tag-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .steps-wrapper {
      margin-bottom: 16px;
    }

    .timeline-wrapper {
      max-width: 400px;
    }

    .tab-content {
      padding: 24px 0 8px;
    }

    @media (max-width: 768px) {
      .demo-card-grid,
      .stat-grid {
        grid-template-columns: 1fr;
      }

      .demo-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `],
  template: `
    <div class="showcase-page">
      <div class="page-header">
        <h1 class="page-title">Component Showcase</h1>
        <p class="page-subtitle">An overview of ng-zorro-antd UI components in action</p>
      </div>

      <nz-tabs nzType="line" nzSize="large">

        <!-- ═══════════════════ BUTTONS TAB ═══════════════════ -->
        <nz-tab nzTitle="Buttons">
          <div class="tab-content">
            <p class="section-title">Types</p>
            <div class="demo-row">
              <button nz-button nzType="primary">Primary</button>
              <button nz-button nzType="default">Default</button>
              <button nz-button nzType="dashed">Dashed</button>
              <button nz-button nzType="text">Text</button>
              <button nz-button nzType="link">Link</button>
            </div>

            <nz-divider></nz-divider>

            <p class="section-title">Sizes</p>
            <div class="demo-row">
              <button nz-button nzType="primary" nzSize="large">Large</button>
              <button nz-button nzType="primary" nzSize="default">Default</button>
              <button nz-button nzType="primary" nzSize="small">Small</button>
            </div>

            <nz-divider></nz-divider>

            <p class="section-title">With Icons</p>
            <div class="demo-row">
              <button nz-button nzType="primary">
                <span nz-icon nzType="search"></span>
                Search
              </button>
              <button nz-button nzType="default">
                <span nz-icon nzType="download"></span>
                Download
              </button>
              <button nz-button nzType="default">
                <span nz-icon nzType="plus"></span>
                Add Item
              </button>
              <button nz-button nzType="default" nzShape="circle">
                <span nz-icon nzType="user"></span>
              </button>
              <button nz-button nzType="primary" nzShape="circle">
                <span nz-icon nzType="plus"></span>
              </button>
            </div>

            <nz-divider></nz-divider>

            <p class="section-title">States</p>
            <div class="demo-row">
              <button nz-button nzType="primary" [nzLoading]="isLoading()" (click)="toggleLoading()">
                @if (isLoading()) { Loading... } @else { Click to Load }
              </button>
              <button nz-button nzType="default" disabled>Disabled</button>
              <button nz-button nzType="primary" nzDanger>Danger Primary</button>
              <button nz-button nzType="default" nzDanger>Danger Default</button>
              <button nz-button nzType="dashed" nzDanger>Danger Dashed</button>
            </div>

            <nz-divider></nz-divider>

            <p class="section-title">Block</p>
            <div style="max-width: 320px; display: flex; flex-direction: column; gap: 8px;">
              <button nz-button nzType="primary" nzBlock>Primary Block</button>
              <button nz-button nzType="default" nzBlock>Default Block</button>
            </div>
          </div>
        </nz-tab>

        <!-- ═══════════════════ TYPOGRAPHY TAB ═══════════════════ -->
        <nz-tab nzTitle="Typography">
          <div class="tab-content">
            <p class="section-title">Headings</p>
            <h1 nz-title>h1 — Heading One</h1>
            <h2 nz-title>h2 — Heading Two</h2>
            <h3 nz-title>h3 — Heading Three</h3>
            <h4 nz-title>h4 — Heading Four</h4>

            <nz-divider></nz-divider>

            <p class="section-title">Text Variants</p>
            <div class="demo-row" style="flex-direction: column; align-items: flex-start;">
              <span nz-text>Default text</span>
              <span nz-text nzType="secondary">Secondary text</span>
              <span nz-text nzType="warning">Warning text</span>
              <span nz-text nzType="danger">Danger text</span>
              <span nz-text nzType="success">Success text</span>
              <span nz-text nzDisabled>Disabled text</span>
              <code>Inline code</code>
              <strong>Strong text</strong>
              <u>Underline text</u>
              <del>Deleted text</del>
              <em>Italic text</em>
              <mark>Marked text</mark>
            </div>

            <nz-divider></nz-divider>

            <p class="section-title">Paragraph</p>
            <p nz-paragraph>
              This is a standard paragraph. ng-zorro-antd typography provides clean,
              consistent text styling based on Ant Design principles. Use it to present
              content with proper visual hierarchy and readability.
            </p>
            <p nz-paragraph [nzEllipsis]="true" [nzExpandable]="true" [nzEllipsisRows]="2">
              This paragraph has ellipsis enabled with two rows. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </nz-tab>

        <!-- ═══════════════════ DATA DISPLAY TAB ═══════════════════ -->
        <nz-tab nzTitle="Data Display">
          <div class="tab-content">

            <!-- Statistics -->
            <p class="section-title">Statistic</p>
            <div class="stat-grid">
              <nz-statistic nzTitle="Active Users" [nzValue]="12489" nzPrefix=""></nz-statistic>
              <nz-statistic nzTitle="Revenue" [nzValue]="94230" nzPrefix="$"></nz-statistic>
              <nz-statistic nzTitle="Conversion" [nzValue]="8.7" nzSuffix="%"></nz-statistic>
              <nz-statistic nzTitle="Uptime" [nzValue]="99.9" nzSuffix="%"></nz-statistic>
            </div>

            <nz-divider></nz-divider>

            <!-- Progress -->
            <p class="section-title">Progress</p>
            <div class="demo-progress-col">
              <nz-progress [nzPercent]="75"></nz-progress>
              <nz-progress [nzPercent]="50" nzStatus="active"></nz-progress>
              <nz-progress [nzPercent]="100" nzStatus="success"></nz-progress>
              <nz-progress [nzPercent]="30" nzStatus="exception"></nz-progress>
            </div>
            <div class="circle-progress-row">
              <nz-progress nzType="circle" [nzPercent]="75"></nz-progress>
              <nz-progress nzType="circle" [nzPercent]="100" nzStatus="success"></nz-progress>
              <nz-progress nzType="circle" [nzPercent]="40" nzStatus="exception"></nz-progress>
              <nz-progress nzType="dashboard" [nzPercent]="65"></nz-progress>
            </div>

            <nz-divider></nz-divider>

            <!-- Badge -->
            <p class="section-title">Badge</p>
            <div class="demo-row">
              <nz-badge [nzCount]="5">
                <div style="width:40px;height:40px;background:#eee;border-radius:4px;"></div>
              </nz-badge>
              <nz-badge [nzCount]="0" [nzShowZero]="true">
                <div style="width:40px;height:40px;background:#eee;border-radius:4px;"></div>
              </nz-badge>
              <nz-badge [nzCount]="99">
                <div style="width:40px;height:40px;background:#eee;border-radius:4px;"></div>
              </nz-badge>
              <nz-badge [nzCount]="150" [nzOverflowCount]="99">
                <div style="width:40px;height:40px;background:#eee;border-radius:4px;"></div>
              </nz-badge>
              <nz-badge nzDot>
                <div style="width:40px;height:40px;background:#eee;border-radius:4px;"></div>
              </nz-badge>
              <nz-badge nzStatus="success" nzText="Success"></nz-badge>
              <nz-badge nzStatus="processing" nzText="Processing"></nz-badge>
              <nz-badge nzStatus="warning" nzText="Warning"></nz-badge>
              <nz-badge nzStatus="error" nzText="Error"></nz-badge>
              <nz-badge nzStatus="default" nzText="Default"></nz-badge>
            </div>

            <nz-divider></nz-divider>

            <!-- Tags -->
            <p class="section-title">Tags</p>
            <div class="tag-row">
              <nz-tag>Default</nz-tag>
              <nz-tag nzColor="processing">Processing</nz-tag>
              <nz-tag nzColor="success">Success</nz-tag>
              <nz-tag nzColor="warning">Warning</nz-tag>
              <nz-tag nzColor="error">Error</nz-tag>
            </div>
            <div class="tag-row">
              <nz-tag nzColor="magenta">Magenta</nz-tag>
              <nz-tag nzColor="red">Red</nz-tag>
              <nz-tag nzColor="volcano">Volcano</nz-tag>
              <nz-tag nzColor="orange">Orange</nz-tag>
              <nz-tag nzColor="gold">Gold</nz-tag>
              <nz-tag nzColor="lime">Lime</nz-tag>
              <nz-tag nzColor="green">Green</nz-tag>
              <nz-tag nzColor="cyan">Cyan</nz-tag>
              <nz-tag nzColor="blue">Blue</nz-tag>
              <nz-tag nzColor="geekblue">Geekblue</nz-tag>
              <nz-tag nzColor="purple">Purple</nz-tag>
            </div>
            <div class="tag-row">
              <nz-tag [nzMode]="'closeable'" (nzOnClose)="$event.preventDefault()">Closeable</nz-tag>
              <nz-tag [nzMode]="'checkable'" [(nzChecked)]="tagChecked">Checkable</nz-tag>
            </div>

            <nz-divider></nz-divider>

            <!-- Avatars -->
            <p class="section-title">Avatar</p>
            <div class="avatar-row">
              <nz-avatar nzSize="large" nzText="AB" nzColor="#f56a00" nzBgColor="#fde3cf"></nz-avatar>
              <nz-avatar nzSize="default" nzText="CD" nzColor="#fff" nzBgColor="#1677ff"></nz-avatar>
              <nz-avatar nzSize="small" nzText="EF" nzColor="#fff" nzBgColor="#52c41a"></nz-avatar>
              <nz-avatar nzIcon="user"></nz-avatar>
              <nz-avatar nzIcon="user" nzBgColor="#f56a00"></nz-avatar>
              <nz-avatar nzShape="square" nzIcon="user"></nz-avatar>
            </div>

            <nz-divider></nz-divider>

            <!-- Cards -->
            <p class="section-title">Cards</p>
            <div class="demo-card-grid">
              <nz-card nzTitle="Basic Card" nzSize="small">
                <p nz-paragraph>Card content goes here. This is a simple card with a title and body text.</p>
              </nz-card>

              <nz-card nzTitle="Actions Card" nzSize="small"
                [nzActions]="[actionLike, actionEdit, actionMore]">
                <nz-card-meta
                  nzTitle="Card Meta Title"
                  nzDescription="Supporting meta description text">
                </nz-card-meta>
              </nz-card>

              <nz-card nzTitle="Hoverable Card" nzSize="small" [nzHoverable]="true">
                <p nz-paragraph>This card has hover effect enabled — try hovering over it.</p>
              </nz-card>
            </div>

            <ng-template #actionLike>
              <span nz-icon nzType="heart"></span>
            </ng-template>
            <ng-template #actionEdit>
              <span nz-icon nzType="setting"></span>
            </ng-template>
            <ng-template #actionMore>
              <span nz-icon nzType="search"></span>
            </ng-template>

          </div>
        </nz-tab>

        <!-- ═══════════════════ FORM CONTROLS TAB ═══════════════════ -->
        <nz-tab nzTitle="Form Controls">
          <div class="tab-content">

            <!-- Input -->
            <p class="section-title">Input</p>
            <div class="demo-grid">
              <div class="form-field">
                <label class="field-label">Basic Input</label>
                <input nz-input placeholder="Enter value..." [(ngModel)]="inputValue" />
              </div>
              <div class="form-field">
                <label class="field-label">Disabled</label>
                <input nz-input placeholder="Disabled input" [disabled]="true" />
              </div>
              <div class="form-field">
                <label class="field-label">With Prefix Icon</label>
                <nz-input-group [nzPrefix]="prefixSearch">
                  <input type="text" nz-input placeholder="Search..." [(ngModel)]="searchValue" />
                </nz-input-group>
              </div>
              <div class="form-field">
                <label class="field-label">With Addon</label>
                <nz-input-group nzAddOnBefore="https://" nzAddOnAfter=".com">
                  <input type="text" nz-input placeholder="domain" [(ngModel)]="domainValue" />
                </nz-input-group>
              </div>
            </div>

            <ng-template #prefixSearch><span nz-icon nzType="search"></span></ng-template>

            <nz-divider></nz-divider>

            <!-- Select -->
            <p class="section-title">Select</p>
            <div class="demo-grid">
              <div class="form-field">
                <label class="field-label">Single Select</label>
                <nz-select [(ngModel)]="selectValue" nzPlaceHolder="Choose option">
                  <nz-option nzValue="opt1" nzLabel="Option One"></nz-option>
                  <nz-option nzValue="opt2" nzLabel="Option Two"></nz-option>
                  <nz-option nzValue="opt3" nzLabel="Option Three"></nz-option>
                </nz-select>
              </div>
              <div class="form-field">
                <label class="field-label">Disabled</label>
                <nz-select [ngModel]="null" nzPlaceHolder="Disabled" [nzDisabled]="true">
                  <nz-option nzValue="x" nzLabel="Option"></nz-option>
                </nz-select>
              </div>
            </div>

            <nz-divider></nz-divider>

            <!-- Checkbox & Radio -->
            <p class="section-title">Checkbox & Radio</p>
            <div class="demo-row" style="align-items: flex-start; gap: 48px;">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label nz-checkbox [(ngModel)]="checkA">Option Alpha</label>
                <label nz-checkbox [(ngModel)]="checkB">Option Beta</label>
                <label nz-checkbox [ngModel]="false" [nzDisabled]="true">Disabled</label>
              </div>
              <div>
                <nz-radio-group [(ngModel)]="radioValue" style="display: flex; flex-direction: column; gap: 8px;">
                  <label nz-radio nzValue="a">Radio A</label>
                  <label nz-radio nzValue="b">Radio B</label>
                  <label nz-radio nzValue="c">Radio C</label>
                  <label nz-radio nzValue="d" [nzDisabled]="true">Disabled</label>
                </nz-radio-group>
              </div>
            </div>

            <nz-divider></nz-divider>

            <!-- Switch & Rate & Slider -->
            <p class="section-title">Toggle Controls</p>
            <div class="demo-grid">
              <div class="form-field">
                <label class="field-label">Switch</label>
                <div class="demo-row">
                  <nz-switch [(ngModel)]="switchValue"></nz-switch>
                  <span nz-text nzType="secondary">{{ switchValue() ? 'On' : 'Off' }}</span>
                </div>
                <div class="demo-row" style="margin-top: 8px;">
                  <nz-switch [ngModel]="true" [nzDisabled]="true" nzSize="small"></nz-switch>
                  <span nz-text nzType="secondary">Small + disabled</span>
                </div>
              </div>

              <div class="form-field">
                <label class="field-label">Rate — {{ rateValue() }} / 5</label>
                <nz-rate [(ngModel)]="rateValue"></nz-rate>
                <nz-rate [ngModel]="3.5" nzAllowHalf [nzDisabled]="true" style="margin-top: 8px;"></nz-rate>
              </div>

              <div class="form-field">
                <label class="field-label">Slider — {{ sliderValue() }}</label>
                <nz-slider [(ngModel)]="sliderValue"></nz-slider>
              </div>

              <div class="form-field">
                <label class="field-label">Range Slider</label>
                <nz-slider nzRange [ngModel]="rangeValue"></nz-slider>
              </div>
            </div>

          </div>
        </nz-tab>

        <!-- ═══════════════════ FEEDBACK TAB ═══════════════════ -->
        <nz-tab nzTitle="Feedback">
          <div class="tab-content">

            <!-- Alerts -->
            <p class="section-title">Alert</p>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
              <nz-alert nzType="success" nzMessage="Success" nzDescription="Operation completed successfully. Your changes have been saved." [nzShowIcon]="true"></nz-alert>
              <nz-alert nzType="info" nzMessage="Info" nzDescription="This is an informational message with additional context." [nzShowIcon]="true"></nz-alert>
              <nz-alert nzType="warning" nzMessage="Warning" nzDescription="This action might have unintended side effects. Proceed with caution." [nzShowIcon]="true"></nz-alert>
              <nz-alert nzType="error" nzMessage="Error" nzDescription="Something went wrong. Please check your input and try again." [nzShowIcon]="true"></nz-alert>
              <nz-alert nzType="success" nzMessage="Dismissible alert" [nzCloseable]="true"></nz-alert>
            </div>

            <nz-divider></nz-divider>

            <!-- Spin -->
            <p class="section-title">Spin</p>
            <div class="demo-row">
              <nz-spin nzSize="small"></nz-spin>
              <nz-spin></nz-spin>
              <nz-spin nzSize="large"></nz-spin>
              <nz-spin nzTip="Loading content...">
                <div class="spin-container" style="width: 200px; height: 80px;"></div>
              </nz-spin>
            </div>

            <nz-divider></nz-divider>

            <!-- Skeleton -->
            <p class="section-title">Skeleton</p>
            <nz-skeleton [nzActive]="true" [nzAvatar]="true" [nzParagraph]="{ rows: 3 }"></nz-skeleton>

            <nz-divider></nz-divider>

            <!-- Steps -->
            <p class="section-title">Steps</p>
            <div class="steps-wrapper">
              <nz-steps [nzCurrent]="stepIndex()">
                <nz-step nzTitle="Initiate" nzDescription="Submit request"></nz-step>
                <nz-step nzTitle="Review" nzDescription="Team approval"></nz-step>
                <nz-step nzTitle="Execute" nzDescription="Process changes"></nz-step>
                <nz-step nzTitle="Complete" nzDescription="Done"></nz-step>
              </nz-steps>
              <div class="demo-row" style="margin-top: 16px;">
                <button nz-button nzType="default" [disabled]="stepIndex() === 0" (click)="prevStep()">Previous</button>
                <button nz-button nzType="primary" [disabled]="stepIndex() === 3" (click)="nextStep()">Next</button>
              </div>
            </div>

            <nz-divider></nz-divider>

            <!-- Timeline -->
            <p class="section-title">Timeline</p>
            <div class="timeline-wrapper">
              <nz-timeline>
                <nz-timeline-item nzColor="green">Project started — Jan 2025</nz-timeline-item>
                <nz-timeline-item nzColor="green">Design phase complete — Feb 2025</nz-timeline-item>
                <nz-timeline-item nzColor="blue">Development in progress — Mar 2025</nz-timeline-item>
                <nz-timeline-item nzColor="gray">QA testing — Apr 2025</nz-timeline-item>
                <nz-timeline-item nzColor="gray">Production launch — May 2025</nz-timeline-item>
              </nz-timeline>
            </div>

          </div>
        </nz-tab>

      </nz-tabs>
    </div>
  `
})
export class ShowcaseComponent {
  readonly isLoading = signal(false);
  readonly tagChecked = signal(false);
  readonly inputValue = signal('');
  readonly searchValue = signal('');
  readonly domainValue = signal('');
  readonly selectValue = signal<string | null>(null);
  readonly checkA = signal(true);
  readonly checkB = signal(false);
  readonly radioValue = signal('a');
  readonly switchValue = signal(true);
  readonly rateValue = signal(3);
  readonly sliderValue = signal(40);
  readonly rangeValue = [20, 70];
  readonly stepIndex = signal(1);

  toggleLoading(): void {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 2000);
  }

  nextStep(): void {
    this.stepIndex.update(v => Math.min(v + 1, 3));
  }

  prevStep(): void {
    this.stepIndex.update(v => Math.max(v - 1, 0));
  }
}
