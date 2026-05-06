import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'toggle-control' },
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .toggle-pill {
      position: relative;
      width: 39px;
      height: 24px;
      border-radius: 100px;
      cursor: pointer;
      flex-shrink: 0;
      background: transparent;
      border: none;
      padding: 0;
      outline: none;
    }

    .toggle-pill:focus-visible {
      box-shadow: 0 0 0 3px rgba(0, 38, 85, 0.3);
    }

    .toggle-pill.state-on {
      background: #002655;
    }

    .toggle-pill.state-off {
      background: transparent;
      border: 2px solid #002655;
    }

    .thumb-right {
      position: absolute;
      right: 2px;
      top: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      pointer-events: none;
    }

    .check-icon {
      position: absolute;
      right: 7px;
      top: 6px;
      pointer-events: none;
    }

    .circle-left {
      position: absolute;
      left: 3px;
      top: 3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #002655;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .toggle-label {
      color: #002655;
      font-family: Roboto, -apple-system, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      white-space: nowrap;
    }
  `],
  template: `
    <button
      class="toggle-pill"
      [class.state-on]="checked()"
      [class.state-off]="!checked()"
      (click)="toggle()"
      role="switch"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="checked() ? 'Yes' : 'No'">
      @if (checked()) {
        <div class="thumb-right"></div>
        <svg class="check-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M4.39754 7.93746L2.31254 5.85246L1.60254 6.55746L4.39754 9.35246L10.3975 3.35246L9.69254 2.64746L4.39754 7.93746Z" fill="black" stroke="black"/>
        </svg>
      } @else {
        <div class="circle-left">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z" fill="white"/>
          </svg>
        </div>
      }
    </button>
    <span class="toggle-label">{{ checked() ? 'Yes' : 'No' }}</span>
  `
})
export class ToggleSwitchComponent {
  readonly checked = input.required<boolean>();
  readonly checkedChange = output<boolean>();

  toggle(): void {
    this.checkedChange.emit(!this.checked());
  }
}
