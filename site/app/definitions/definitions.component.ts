import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleSwitchComponent } from './toggle-switch.component';

@Component({
  selector: 'app-definitions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToggleSwitchComponent],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      font-family: Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* ─── Page Layout ─── */
    .def-page {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      background: #fff;
    }

    /* ─── Top Header ─── */
    .def-header {
      height: 55px;
      background: #002655;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      flex-shrink: 0;
      border-bottom: 1px solid #1C4E80;
      gap: 16px;
    }

    .def-header-left {
      display: flex;
      align-items: center;
      gap: 17px;
      overflow: hidden;
    }

    .def-header-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      color: #fff;
    }

    .def-brand-logo {
      width: 116px;
      height: 28px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .def-breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .def-breadcrumb-sep {
      color: #fff;
      display: flex;
      align-items: center;
    }

    .def-bc-bold {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      white-space: nowrap;
    }

    .def-bc-normal {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      white-space: nowrap;
    }

    .def-header-right {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .def-header-divider {
      width: 1px;
      height: 24px;
      background: #fff;
    }

    .def-user-name {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
    }

    .def-user-badge {
      display: flex;
      width: 28px;
      padding: 4px 3px;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      background: #F83C5A;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }

    /* ─── Body ─── */
    .def-body {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    /* ─── Sidebar ─── */
    .def-sidebar {
      width: 300px;
      flex-shrink: 0;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 10;
    }

    .def-sidebar-inner {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .def-sidebar-logo-area {
      height: 80px;
      padding: 26px 50px 27px 24px;
      display: flex;
      align-items: center;
      background: #fff;
      flex-shrink: 0;
    }

    .def-sidebar-logo-text {
      color: #002655;
      font-size: 23px;
      font-weight: 700;
      line-height: normal;
    }

    .def-nav-menu {
      display: flex;
      flex-direction: column;
      gap: 0;
      flex: 1;
    }

    /* Top-level menu item */
    .def-menu-top {
      display: flex;
      flex-direction: column;
    }

    .def-menu-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 9px 16px;
      cursor: pointer;
      gap: 10px;
    }

    .def-menu-top-left {
      display: flex;
      align-items: center;
      gap: 10px;
      overflow: hidden;
    }

    .def-menu-icon-wrap {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .def-menu-title {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .def-menu-title.blue { color: #2971BA; }
    .def-menu-title.dark { color: rgba(0, 0, 0, 0.85); }

    .def-arrow-icon {
      flex-shrink: 0;
      width: 10px;
      height: 10px;
    }

    /* Submenu */
    .def-submenu {
      display: flex;
      flex-direction: column;
      background: #fff;
    }

    .def-submenu-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      padding: 9px 40px;
      cursor: pointer;
      position: relative;
    }

    .def-submenu-row.active {
      background: #E2EDFF;
      box-shadow: -3px 0 0 0 #2971BA inset;
    }

    .def-submenu-title {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .def-submenu-title.blue { color: #2971BA; }
    .def-submenu-title.dark { color: rgba(0, 0, 0, 0.85); }

    .def-submenu-row-inner {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
      overflow: hidden;
    }

    .def-avatar-group {
      display: flex;
      align-items: center;
      gap: -4px;
      flex-shrink: 0;
    }

    .def-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: #fff;
      flex-shrink: 0;
    }

    .def-avatar.dark-bg { background: #1C4E80; }
    .def-avatar.light-bg { background: #8BB8E6; color: #002655; }

    /* Sidebar trigger */
    .def-sidebar-trigger {
      flex-shrink: 0;
      padding: 0 16px;
      border-top: 1px solid #F0F0F0;
    }

    .def-fold-btn {
      background: none;
      border: none;
      cursor: pointer;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0;
    }

    /* ─── Main Content ─── */
    .def-content {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .def-content-header {
      height: 56px;
      background: #F5F5F5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 18px;
      flex-shrink: 0;
      gap: 16px;
    }

    .def-page-title {
      color: #1C1E2A;
      font-size: 19px;
      font-weight: 400;
      line-height: normal;
    }

    .def-header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-shrink: 0;
    }

    .def-btn-secondary {
      height: 31px;
      padding: 0 16px;
      border-radius: 4px;
      border: 1px solid #002655;
      background: #fff;
      color: #002655;
      font-family: Roboto, sans-serif;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
    }

    .def-btn-secondary:hover { background: #f0f4fa; }

    .def-btn-primary {
      height: 31px;
      padding: 0 12px;
      border-radius: 4px;
      border: none;
      background: #002655;
      color: #fff;
      font-family: Roboto, sans-serif;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
    }

    .def-btn-primary:hover { background: #003070; }

    /* ─── Sections ─── */
    .def-section {
      flex-shrink: 0;
    }

    .def-section-bar {
      background: #DBDDE1;
      padding: 12px 24px;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      line-height: 24px;
    }

    /* Simple rows (sections 1 & 2) */
    .def-simple-row {
      display: grid;
      grid-template-columns: minmax(200px, 380px) 180px 1fr;
      align-items: center;
      min-height: 44px;
      border-bottom: 1px solid #DCE0E5;
    }

    .def-simple-row.row-alt { background: #F8F8F8; }

    /* Three-column table (section 3) */
    .def-table-header-3col {
      display: grid;
      grid-template-columns: 1fr 220px 360px;
      align-items: center;
      height: 44px;
      background: #F8F8F8;
      border-bottom: 1px solid #DCE0E5;
    }

    .def-three-col-row {
      display: grid;
      grid-template-columns: 1fr 220px 360px;
      align-items: center;
      min-height: 44px;
      border-bottom: 1px solid #DCE0E5;
    }

    .def-three-col-row.row-alt { background: #F8F8F8; }

    /* Refi table (section 4) */
    .def-table-header-refi {
      display: grid;
      grid-template-columns: 380px 180px 180px 1fr;
      align-items: center;
      height: 44px;
      background: #F8F8F8;
      border-bottom: 1px solid #DCE0E5;
    }

    .def-refi-row {
      display: grid;
      grid-template-columns: 380px 180px 180px 1fr;
      align-items: center;
      min-height: 44px;
      border-bottom: 1px solid #DCE0E5;
    }

    .def-refi-row.row-alt { background: #F8F8F8; }

    /* Shared cell styles */
    .def-col-label {
      font-size: 15px;
      font-weight: 400;
      color: #000;
      padding: 10px 18px 10px 58px;
      line-height: 1.4;
    }

    .def-col-label.link {
      color: #0057FF;
      cursor: pointer;
      text-decoration: none;
    }

    .def-col-label.link:hover { text-decoration: underline; }

    .def-col-header {
      font-size: 15px;
      font-weight: 700;
      color: #000;
      padding: 0 18px 0 58px;
      line-height: 43.5px;
    }

    .def-col-header.first { padding-left: 58px; }
    .def-col-header.other { padding-left: 18px; }

    .def-col-toggle {
      padding: 0 18px;
      display: flex;
      align-items: center;
    }

    .def-col-text-val {
      padding: 0 18px;
      font-size: 14px;
      color: rgba(104, 104, 110, 1);
    }

    /* ─── Footer ─── */
    .def-footer {
      background: #DBDDE1;
      padding: 4px 24px;
      font-size: 10px;
      font-weight: 400;
      color: #1C1E2A;
      flex-shrink: 0;
      line-height: normal;
    }

    /* ─── Responsive ─── */
    @media (max-width: 1024px) {
      .def-sidebar {
        position: absolute;
        left: 0;
        top: 55px;
        bottom: 0;
        z-index: 20;
        transform: translateX(-100%);
        transition: transform 0.25s ease;
      }

      .def-sidebar.sidebar-open {
        transform: translateX(0);
      }

      .def-breadcrumb { display: none; }
    }

    @media (max-width: 768px) {
      .def-simple-row {
        grid-template-columns: 1fr 150px;
      }

      .def-table-header-3col,
      .def-three-col-row {
        grid-template-columns: 1fr 160px 160px;
      }

      .def-table-header-refi,
      .def-refi-row {
        grid-template-columns: 1fr 130px 130px;
      }

      .def-col-label {
        padding-left: 18px;
        font-size: 13px;
      }

      .def-col-header {
        padding-left: 18px;
        font-size: 13px;
      }

      .def-user-name { display: none; }
    }
  `],
  template: `
    <div class="def-page">

      <!-- ═══════════════ TOP HEADER ═══════════════ -->
      <header class="def-header" role="banner">
        <div class="def-header-left">
          <!-- Hamburger -->
          <button class="def-header-btn" (click)="toggleMobileSidebar()" aria-label="Toggle navigation menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white"/>
            </svg>
          </button>

          <!-- Logo -->
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/df71bb2d723e39ba8822118e781f46d1cba9c959?width=232"
            alt="Intelligence"
            class="def-brand-logo" />

          <!-- Breadcrumb -->
          <nav class="def-breadcrumb" aria-label="Breadcrumb navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 4.45833 18.1542 4.88066 18.4135 5.21794L15.1595 8.63246C14.5366 8.23218 13.7954 8 13 8C12.0249 8 11.1312 8.34893 10.4371 8.92875L7.92363 6.97382C7.97317 6.82488 8 6.66558 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8C6.79815 8 7.07599 7.91301 7.30951 7.76303L9.75298 9.66349C9.37114 10.1932 9.11573 10.8201 9.03095 11.5H5.93699C5.71497 10.6374 4.93192 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14C4.93192 14 5.71497 13.3626 5.93699 12.5H9.03095C9.25657 14.3094 10.6906 15.7434 12.5 15.9691V18.063C11.6374 18.285 11 19.0681 11 20C11 21.1046 11.8954 22 13 22C14.1046 22 15 21.1046 15 20C15 19.0681 14.3626 18.285 13.5 18.063L13.5 15.9691C15.4732 15.723 17 14.0398 17 12C17 10.9472 16.5933 9.98943 15.9284 9.27519L19.2058 5.83609C19.4492 5.94155 19.7178 6 20 6Z" fill="white"/>
            </svg>
            <span class="def-bc-bold">Funding Optimisation</span>
            <span class="def-breadcrumb-sep" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.32225 5L7.67725 6.645L13.0206 12L7.67725 17.355L9.32225 19L16.3222 12L9.32225 5Z" fill="white"/>
              </svg>
            </span>
            <span class="def-bc-normal">Daily Funding Workflow</span>
            <span class="def-breadcrumb-sep" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.32225 5L7.67725 6.645L13.0206 12L7.67725 17.355L9.32225 19L16.3222 12L9.32225 5Z" fill="white"/>
              </svg>
            </span>
            <span class="def-bc-normal">Setup</span>
            <span class="def-breadcrumb-sep" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.32225 5L7.67725 6.645L13.0206 12L7.67725 17.355L9.32225 19L16.3222 12L9.32225 5Z" fill="white"/>
              </svg>
            </span>
            <span class="def-bc-normal">Definitions</span>
          </nav>
        </div>

        <div class="def-header-right">
          <!-- Bell -->
          <button class="def-header-btn" aria-label="Notifications">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6.67333 13.6733C6.67333 14.4067 7.26667 15 8 15C8.73333 15 9.32667 14.4067 9.32667 13.6733H6.67333ZM12.5867 10.88V7C12.5867 4.83333 11.0867 3.02 9.06 2.54V2.06C9.06 1.47333 8.58667 1 8 1C7.41333 1 6.94 1.47333 6.94 2.06V2.54C4.91333 3.02 3.41333 4.83333 3.41333 7V10.88L2 12.2933V13H14V12.2933L12.5867 10.88Z" fill="white"/>
            </svg>
          </button>
          <div class="def-header-divider" aria-hidden="true"></div>
          <span class="def-user-name">Mark B</span>
          <div class="def-user-badge" aria-label="User initials: Mark B">MB</div>
          <!-- Apps grid -->
          <button class="def-header-btn" aria-label="Applications menu">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.6665 5.33341H5.33317V2.66675H2.6665V5.33341ZM6.6665 13.3334H9.33317V10.6667H6.6665V13.3334ZM2.6665 13.3334H5.33317V10.6667H2.6665V13.3334ZM2.6665 9.33342H5.33317V6.66675H2.6665V9.33342ZM6.6665 9.33342H9.33317V6.66675H6.6665V9.33342ZM10.6665 2.66675V5.33341H13.3332V2.66675H10.6665ZM6.6665 5.33341H9.33317V2.66675H6.6665V5.33341ZM10.6665 9.33342H13.3332V6.66675H10.6665V9.33342ZM10.6665 13.3334H13.3332V10.6667H10.6665V13.3334Z" fill="white"/>
            </svg>
          </button>
        </div>
      </header>

      <!-- ═══════════════ BODY ═══════════════ -->
      <div class="def-body">

        <!-- LEFT SIDEBAR -->
        <aside class="def-sidebar" [class.sidebar-open]="mobileSidebarOpen()" aria-label="Sidebar navigation">
          <div class="def-sidebar-inner">

            <!-- Logo -->
            <div class="def-sidebar-logo-area">
              <span class="def-sidebar-logo-text">Lorem ipsum dolor sit</span>
            </div>

            <!-- Navigation Menu -->
            <nav class="def-nav-menu">

              <!-- ── Nulla (expanded) ── -->
              <div class="def-menu-top">
                <div class="def-menu-top-row">
                  <div class="def-menu-top-left">
                    <span class="def-menu-icon-wrap" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M4.25833 11.6667L4.025 9.8C3.89861 9.75139 3.77951 9.69306 3.66771 9.625C3.5559 9.55694 3.44653 9.48403 3.33958 9.40625L1.60417 10.1354L0 7.36458L1.50208 6.22708C1.49236 6.15903 1.4875 6.0934 1.4875 6.03021V5.63646C1.4875 5.57326 1.49236 5.50764 1.50208 5.43958L0 4.30208L1.60417 1.53125L3.33958 2.26042C3.44653 2.18264 3.55833 2.10972 3.675 2.04167C3.79167 1.97361 3.90833 1.91528 4.025 1.86667L4.25833 0H7.46667L7.7 1.86667C7.82639 1.91528 7.94549 1.97361 8.05729 2.04167C8.1691 2.10972 8.27847 2.18264 8.38542 2.26042L10.1208 1.53125L11.725 4.30208L10.2229 5.43958C10.2326 5.50764 10.2375 5.57326 10.2375 5.63646V6.03021C10.2375 6.0934 10.2278 6.15903 10.2083 6.22708L11.7104 7.36458L10.1062 10.1354L8.38542 9.40625C8.27847 9.48403 8.16667 9.55694 8.05 9.625C7.93333 9.69306 7.81667 9.75139 7.7 9.8L7.46667 11.6667H4.25833ZM5.89167 7.875C6.45556 7.875 6.93681 7.6757 7.33542 7.27708C7.73403 6.87847 7.93333 6.39722 7.93333 5.83333C7.93333 5.26944 7.73403 4.78819 7.33542 4.38958C6.93681 3.99097 6.45556 3.79167 5.89167 3.79167C5.31806 3.79167 4.83437 3.99097 4.44063 4.38958C4.04688 4.78819 3.85 5.26944 3.85 5.83333C3.85 6.39722 4.04688 6.87847 4.44063 7.27708C4.83437 7.6757 5.31806 7.875 5.89167 7.875Z" fill="#2971BA"/>
                      </svg>
                    </span>
                    <span class="def-menu-title blue">Nulla</span>
                  </div>
                  <svg class="def-arrow-icon" viewBox="0 0 8 5" fill="none" aria-hidden="true">
                    <path d="M4.07918 0C4.32664 0.0118817 4.59787 0.132999 4.81746 0.352539L7.64559 3.18066C8.03611 3.57119 8.11524 4.12605 7.82234 4.41895C7.52935 4.71127 6.97535 4.63244 6.58504 4.24219L3.9991 1.65625L1.41414 4.24219C1.0237 4.63232 0.469674 4.71157 0.176836 4.41895C-0.116058 4.12605 -0.0369309 3.57119 0.353593 3.18066L3.18172 0.352539C3.40144 0.132822 3.67338 0.0117854 3.92098 0H4.07918Z" fill="rgba(0,0,0,0.85)"/>
                  </svg>
                </div>

                <!-- Submenu -->
                <div class="def-submenu" role="menu">
                  <!-- Selected: Lorem with avatars -->
                  <div class="def-submenu-row active" role="menuitem" aria-current="page">
                    <div class="def-submenu-row-inner">
                      <span class="def-submenu-title blue">Lorem</span>
                    </div>
                    <div class="def-avatar-group" aria-label="2 collaborators">
                      <div class="def-avatar dark-bg" aria-label="AB">AB</div>
                      <div class="def-avatar light-bg" aria-label="2 more">+2</div>
                    </div>
                  </div>

                  <div class="def-submenu-row" role="menuitem">
                    <span class="def-submenu-title dark">Lorem ipsum dolor sit</span>
                  </div>

                  <div class="def-submenu-row" role="menuitem">
                    <span class="def-submenu-title dark">Lorem ipsum dolor sit</span>
                  </div>

                  <div class="def-submenu-row" role="menuitem" style="justify-content: space-between;">
                    <span class="def-submenu-title dark">Lorem ipsum dolor sit</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style="flex-shrink:0; margin-left:8px;">
                      <path d="M13.125 6.99854H12.25C12.1813 6.99854 12.125 7.05479 12.125 7.12354V12.1235H1.875V1.87354H6.875C6.94375 1.87354 7 1.81729 7 1.74854V0.873535C7 0.804785 6.94375 0.748535 6.875 0.748535H1.25C0.973438 0.748535 0.75 0.971973 0.75 1.24854V12.7485C0.75 13.0251 0.973438 13.2485 1.25 13.2485H12.75C13.0266 13.2485 13.25 13.0251 13.25 12.7485V7.12354C13.25 7.05479 13.1938 6.99854 13.125 6.99854Z" fill="rgba(0,0,0,0.85)"/>
                      <path d="M4.56083 7.35635L4.53115 9.21416C4.52958 9.35322 4.64208 9.46729 4.78115 9.46729H4.7874L6.63115 9.42197C6.6624 9.42041 6.69365 9.40791 6.71552 9.38603L13.214 2.90166C13.2624 2.85322 13.2624 2.77354 13.214 2.7251L11.2718 0.784473C11.2468 0.759473 11.2155 0.748535 11.1827 0.748535C11.1499 0.748535 11.1186 0.761035 11.0936 0.784473L4.59677 7.26885C4.5742 7.29245 4.56137 7.3237 4.56083 7.35635ZM5.55302 7.7251L11.1827 2.10791L11.889 2.8126L6.25615 8.43291L5.54208 8.4501L5.55302 7.7251Z" fill="rgba(0,0,0,0.85)"/>
                    </svg>
                  </div>

                  <div class="def-submenu-row" role="menuitem" style="justify-content: space-between;">
                    <span class="def-submenu-title dark">Lorem ipsum dolor sit</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style="flex-shrink:0; margin-left:8px;">
                      <path d="M13.125 6.99854H12.25C12.1813 6.99854 12.125 7.05479 12.125 7.12354V12.1235H1.875V1.87354H6.875C6.94375 1.87354 7 1.81729 7 1.74854V0.873535C7 0.804785 6.94375 0.748535 6.875 0.748535H1.25C0.973438 0.748535 0.75 0.971973 0.75 1.24854V12.7485C0.75 13.0251 0.973438 13.2485 1.25 13.2485H12.75C13.0266 13.2485 13.25 13.0251 13.25 12.7485V7.12354C13.25 7.05479 13.1938 6.99854 13.125 6.99854Z" fill="rgba(0,0,0,0.85)"/>
                      <path d="M4.56083 7.35635L4.53115 9.21416C4.52958 9.35322 4.64208 9.46729 4.78115 9.46729H4.7874L6.63115 9.42197C6.6624 9.42041 6.69365 9.40791 6.71552 9.38603L13.214 2.90166C13.2624 2.85322 13.2624 2.77354 13.214 2.7251L11.2718 0.784473C11.2468 0.759473 11.2155 0.748535 11.1827 0.748535C11.1499 0.748535 11.1186 0.761035 11.0936 0.784473L4.59677 7.26885C4.5742 7.29245 4.56137 7.3237 4.56083 7.35635ZM5.55302 7.7251L11.1827 2.10791L11.889 2.8126L6.25615 8.43291L5.54208 8.4501L5.55302 7.7251Z" fill="rgba(0,0,0,0.85)"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- ── Lorem ipsum (Table icon) ── -->
              <div class="def-menu-top">
                <div class="def-menu-top-row">
                  <div class="def-menu-top-left">
                    <span class="def-menu-icon-wrap" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M13.5 1.49707H0.5C0.223437 1.49707 0 1.72051 0 1.99707V11.9971C0 12.2736 0.223437 12.4971 0.5 12.4971H13.5C13.7766 12.4971 14 12.2736 14 11.9971V1.99707C14 1.72051 13.7766 1.49707 13.5 1.49707ZM12.875 4.74707H9.5625V2.62207H12.875V4.74707ZM12.875 8.24707H9.5625V5.74707H12.875V8.24707ZM5.4375 5.74707H8.5625V8.24707H5.4375V5.74707ZM8.5625 4.74707H5.4375V2.62207H8.5625V4.74707ZM1.125 5.74707H4.4375V8.24707H1.125V5.74707ZM1.125 2.62207H4.4375V4.74707H1.125V2.62207ZM1.125 9.24707H4.4375V11.3721H1.125V9.24707ZM5.4375 9.24707H8.5625V11.3721H5.4375V9.24707ZM12.875 11.3721H9.5625V9.24707H12.875V11.3721Z" fill="rgba(0,0,0,0.85)"/>
                      </svg>
                    </span>
                    <span class="def-menu-title dark">Lorem ipsum</span>
                  </div>
                </div>
              </div>

              <!-- ── Lorem ipsum (Warning icon) ── -->
              <div class="def-menu-top">
                <div class="def-menu-top-row">
                  <div class="def-menu-top-left">
                    <span class="def-menu-icon-wrap" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.2504 10.25C6.2504 10.4489 6.32941 10.6397 6.47007 10.7803C6.61072 10.921 6.80148 11 7.0004 11C7.19931 11 7.39007 10.921 7.53073 10.7803C7.67138 10.6397 7.7504 10.4489 7.7504 10.25C7.7504 10.0511 7.67138 9.86032 7.53073 9.71967C7.39007 9.57902 7.19931 9.5 7.0004 9.5C6.80148 9.5 6.61072 9.57902 6.47007 9.71967C6.32941 9.86032 6.2504 10.0511 6.2504 10.25ZM6.5004 5.5V8.375C6.5004 8.44375 6.55665 8.5 6.6254 8.5H7.3754C7.44415 8.5 7.5004 8.44375 7.5004 8.375V5.5C7.5004 5.43125 7.44415 5.375 7.3754 5.375H6.6254C6.55665 5.375 6.5004 5.43125 6.5004 5.5ZM13.9332 12.375L7.43321 1.125C7.33633 0.957813 7.16915 0.875 7.0004 0.875C6.83165 0.875 6.6629 0.957813 6.56758 1.125L0.0675835 12.375C-0.124604 12.7094 0.116021 13.125 0.500396 13.125H13.5004C13.8848 13.125 14.1254 12.7094 13.9332 12.375ZM1.69102 11.9391L7.0004 2.74844L12.3098 11.9391H1.69102Z" fill="rgba(0,0,0,0.85)"/>
                      </svg>
                    </span>
                    <span class="def-menu-title dark">Lorem ipsum</span>
                  </div>
                </div>
              </div>

              <!-- ── Sed (Profile icon) ── -->
              <div class="def-menu-top">
                <div class="def-menu-top-row">
                  <div class="def-menu-top-left">
                    <span class="def-menu-icon-wrap" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M12.75 0.751953H1.25C0.973438 0.751953 0.75 0.975391 0.75 1.25195V12.752C0.75 13.0285 0.973438 13.252 1.25 13.252H12.75C13.0266 13.252 13.25 13.0285 13.25 12.752V1.25195C13.25 0.975391 13.0266 0.751953 12.75 0.751953ZM12.125 12.127H1.875V1.87695H12.125V12.127ZM6.6875 5.25195H9.5625C9.63125 5.25195 9.6875 5.1957 9.6875 5.12695V4.37695C9.6875 4.3082 9.63125 4.25195 9.5625 4.25195H6.6875C6.61875 4.25195 6.5625 4.3082 6.5625 4.37695V5.12695C6.5625 5.1957 6.61875 5.25195 6.6875 5.25195ZM6.6875 7.50195H9.5625C9.63125 7.50195 9.6875 7.4457 9.6875 7.37695V6.62695C9.6875 6.5582 9.63125 6.50195 9.5625 6.50195H6.6875C6.61875 6.50195 6.5625 6.5582 6.5625 6.62695V7.37695C6.5625 7.4457 6.61875 7.50195 6.6875 7.50195ZM6.6875 9.75195H9.5625C9.63125 9.75195 9.6875 9.6957 9.6875 9.62695V8.87695C9.6875 8.8082 9.63125 8.75195 9.5625 8.75195H6.6875C6.61875 8.75195 6.5625 8.8082 6.5625 8.87695V9.62695C6.5625 9.6957 6.61875 9.75195 6.6875 9.75195ZM4.3125 4.75195C4.3125 4.91771 4.37835 5.07668 4.49556 5.1939C4.61277 5.31111 4.77174 5.37695 4.9375 5.37695C5.10326 5.37695 5.26223 5.31111 5.37944 5.1939C5.49665 5.07668 5.5625 4.91771 5.5625 4.75195C5.5625 4.58619 5.49665 4.42722 5.37944 4.31001C5.26223 4.1928 5.10326 4.12695 4.9375 4.12695C4.77174 4.12695 4.61277 4.1928 4.49556 4.31001C4.37835 4.42722 4.3125 4.58619 4.3125 4.75195ZM4.3125 7.00195C4.3125 7.16771 4.37835 7.32669 4.49556 7.4439C4.61277 7.56111 4.77174 7.62695 4.9375 7.62695C5.10326 7.62695 5.26223 7.56111 5.37944 7.4439C5.49665 7.32669 5.5625 7.16771 5.5625 7.00195C5.5625 6.83619 5.49665 6.67722 5.37944 6.56001C5.26223 6.4428 5.10326 6.37695 4.9375 6.37695C4.77174 6.37695 4.61277 6.4428 4.49556 6.56001C4.37835 6.67722 4.3125 6.83619 4.3125 7.00195ZM4.3125 9.25195C4.3125 9.41771 4.37835 9.57669 4.49556 9.6939C4.61277 9.81111 4.77174 9.87695 4.9375 9.87695C5.10326 9.87695 5.26223 9.81111 5.37944 9.6939C5.49665 9.57669 5.5625 9.41771 5.5625 9.25195C5.5625 9.08619 5.49665 8.92722 5.37944 8.81001C5.26223 8.6928 5.10326 8.62695 4.9375 8.62695C4.77174 8.62695 4.61277 8.6928 4.49556 8.81001C4.37835 8.92722 4.3125 9.08619 4.3125 9.25195Z" fill="rgba(0,0,0,0.85)"/>
                      </svg>
                    </span>
                    <span class="def-menu-title dark">Sed</span>
                  </div>
                </div>
              </div>

              <!-- ── Lorem ipsum (User icon) ── -->
              <div class="def-menu-top">
                <div class="def-menu-top-row">
                  <div class="def-menu-top-left">
                    <span class="def-menu-icon-wrap" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M12.4136 10.9293C12.1189 10.2311 11.6911 9.59696 11.1542 9.06211C10.619 8.52572 9.98491 8.09805 9.28705 7.80274C9.2808 7.79961 9.27455 7.79805 9.2683 7.79492C10.2417 7.0918 10.8746 5.94649 10.8746 4.6543C10.8746 2.51367 9.14018 0.779297 6.99955 0.779297C4.85893 0.779297 3.12455 2.51367 3.12455 4.6543C3.12455 5.94649 3.75736 7.0918 4.7308 7.79648C4.72455 7.79961 4.7183 7.80117 4.71205 7.8043C4.01205 8.09961 3.38393 8.52305 2.84486 9.06367C2.30847 9.59893 1.88081 10.233 1.58549 10.9309C1.29537 11.6141 1.1389 12.3466 1.12455 13.0887C1.12413 13.1053 1.12706 13.1219 1.13315 13.1375C1.13925 13.153 1.14839 13.1671 1.16004 13.1791C1.17169 13.191 1.18561 13.2005 1.20098 13.207C1.21636 13.2135 1.23287 13.2168 1.24955 13.2168H2.18705C2.2558 13.2168 2.31049 13.1621 2.31205 13.0949C2.3433 11.8887 2.82768 10.759 3.68393 9.90274C4.56986 9.0168 5.74643 8.5293 6.99955 8.5293C8.25268 8.5293 9.42924 9.0168 10.3152 9.90274C11.1714 10.759 11.6558 11.8887 11.6871 13.0949C11.6886 13.1637 11.7433 13.2168 11.8121 13.2168H12.7496C12.7662 13.2168 12.7827 13.2135 12.7981 13.207C12.8135 13.2005 12.8274 13.191 12.8391 13.1791C12.8507 13.1671 12.8599 13.153 12.8659 13.1375C12.872 13.1219 12.875 13.1053 12.8746 13.0887C12.8589 12.3418 12.7042 11.6152 12.4136 10.9293ZM6.99955 7.3418C6.28236 7.3418 5.60736 7.06211 5.09955 6.5543C4.59174 6.04648 4.31205 5.37148 4.31205 4.6543C4.31205 3.93711 4.59174 3.26211 5.09955 2.7543C5.60736 2.24648 6.28236 1.9668 6.99955 1.9668C7.71674 1.9668 8.39174 2.24648 8.89955 2.7543C9.40736 3.26211 9.68705 3.93711 9.68705 4.6543C9.68705 5.37148 9.40736 6.04648 8.89955 6.5543C8.39174 7.06211 7.71674 7.3418 6.99955 7.3418Z" fill="rgba(0,0,0,0.85)"/>
                      </svg>
                    </span>
                    <span class="def-menu-title dark">Lorem ipsum</span>
                  </div>
                </div>
              </div>

              <!-- ── Lorem ipsum (CheckCircle icon) ── -->
              <div class="def-menu-top">
                <div class="def-menu-top-row">
                  <div class="def-menu-top-left">
                    <span class="def-menu-icon-wrap" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M9.92183 4.51514H9.18902C9.02964 4.51514 8.87808 4.5917 8.78433 4.72295L6.32808 8.1292L5.21558 6.58545C5.12183 6.45576 4.97183 6.37764 4.81089 6.37764H4.07808C3.97652 6.37764 3.91714 6.49326 3.97652 6.57607L5.92339 9.27607C5.96938 9.34027 6.03001 9.39257 6.10026 9.42866C6.1705 9.46474 6.24833 9.48356 6.3273 9.48356C6.40627 9.48356 6.4841 9.46474 6.55434 9.42866C6.62458 9.39257 6.68521 9.34027 6.7312 9.27607L10.0218 4.71357C10.0828 4.63076 10.0234 4.51514 9.92183 4.51514Z" fill="rgba(0,0,0,0.85)"/>
                        <path d="M7 0C3.13437 0 0 3.13437 0 7C0 10.8656 3.13437 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13437 10.8656 0 7 0ZM7 12.8125C3.79063 12.8125 1.1875 10.2094 1.1875 7C1.1875 3.79063 3.79063 1.1875 7 1.1875C10.2094 1.1875 12.8125 3.79063 12.8125 7C12.8125 10.2094 10.2094 12.8125 7 12.8125Z" fill="rgba(0,0,0,0.85)"/>
                      </svg>
                    </span>
                    <span class="def-menu-title dark">Lorem ipsum</span>
                  </div>
                </div>
              </div>

            </nav>
          </div>

          <!-- Sidebar fold trigger -->
          <div class="def-sidebar-trigger">
            <button class="def-fold-btn" (click)="toggleMobileSidebar()" aria-label="Fold sidebar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6.14314 6.75056H14.7146C14.7931 6.75056 14.8574 6.68627 14.8574 6.6077V5.6077C14.8574 5.52913 14.7931 5.46484 14.7146 5.46484H6.14314C6.06457 5.46484 6.00028 5.52913 6.00028 5.6077V6.6077C6.00028 6.68627 6.06457 6.75056 6.14314 6.75056ZM6.00028 10.3934C6.00028 10.472 6.06457 10.5363 6.14314 10.5363H14.7146C14.7931 10.5363 14.8574 10.472 14.8574 10.3934V9.39342C14.8574 9.31484 14.7931 9.25056 14.7146 9.25056H6.14314C6.06457 9.25056 6.00028 9.31484 6.00028 9.39342V10.3934ZM15.0003 1.71484H1.00028C0.921708 1.71484 0.857422 1.77913 0.857422 1.8577V2.8577C0.857422 2.93627 0.921708 3.00056 1.00028 3.00056H15.0003C15.0789 3.00056 15.1431 2.93627 15.1431 2.8577V1.8577C15.1431 1.77913 15.0789 1.71484 15.0003 1.71484ZM15.0003 13.0006H1.00028C0.921708 13.0006 0.857422 13.0648 0.857422 13.1434V14.1434C0.857422 14.222 0.921708 14.2863 1.00028 14.2863H15.0003C15.0789 14.2863 15.1431 14.222 15.1431 14.1434V13.1434C15.1431 13.0648 15.0789 13.0006 15.0003 13.0006ZM0.918136 8.12377L3.70921 10.322C3.81278 10.4041 3.96635 10.3309 3.96635 10.1988V5.80234C3.96635 5.6702 3.81457 5.59699 3.70921 5.67913L0.918136 7.87734C0.899369 7.89194 0.884182 7.91062 0.873736 7.93197C0.863289 7.95333 0.857859 7.97679 0.857859 8.00056C0.857859 8.02433 0.863289 8.04779 0.873736 8.06914C0.884182 8.0905 0.899369 8.10918 0.918136 8.12377Z" fill="black"/>
              </svg>
            </button>
          </div>
        </aside>

        <!-- ═══════════════ MAIN CONTENT ═══════════════ -->
        <main class="def-content" id="main-content">

          <!-- Content Header Bar -->
          <div class="def-content-header">
            <span class="def-page-title">Setup - Definition</span>
            <div class="def-header-actions">
              <button class="def-btn-secondary">Run DFW</button>
              <button class="def-btn-primary">Save</button>
            </div>
          </div>

          <!-- ─── SECTION 1: Define Construction Loan Tag ─── -->
          <section class="def-section" aria-labelledby="section-construction">
            <div class="def-section-bar" id="section-construction">Define Construction Loan Tag</div>

            @for (label of constructionLabels; track $index) {
              <div class="def-simple-row" [class.row-alt]="$index % 2 !== 0" role="row">
                <div class="def-col-label" role="cell">{{ label }}</div>
                <div class="def-col-toggle" role="cell">
                  <app-toggle-switch
                    [checked]="constructionToggles()[$index]"
                    (checkedChange)="updateConstruction($index, $event)" />
                </div>
              </div>
            }
          </section>

          <!-- ─── SECTION 2: Fees ─── -->
          <section class="def-section" aria-labelledby="section-fees">
            <div class="def-section-bar" id="section-fees">Fees</div>

            @for (label of feesLabels; track $index) {
              <div class="def-simple-row" [class.row-alt]="$index % 2 !== 0" role="row">
                <div class="def-col-label link" role="cell">{{ label }}</div>
                <div class="def-col-toggle" role="cell">
                  <app-toggle-switch
                    [checked]="feesToggles()[$index]"
                    (checkedChange)="updateFees($index, $event)" />
                </div>
              </div>
            }
          </section>

          <!-- ─── SECTION 3: Define Pipeline Loan ─── -->
          <section class="def-section" aria-labelledby="section-pipeline">
            <div class="def-section-bar" id="section-pipeline">Define Pipeline Loan</div>

            <!-- Table Header -->
            <div class="def-table-header-3col" role="row">
              <div class="def-col-header first" role="columnheader">Definition</div>
              <div class="def-col-header other" role="columnheader">Settlement Pipeline</div>
              <div class="def-col-header other" role="columnheader">Average Settlement Overlay (Projected)</div>
            </div>

            <!-- Data Rows -->
            @for (def of pipelineDefinitions; track $index) {
              <div class="def-three-col-row" [class.row-alt]="$index % 2 !== 0" role="row">
                <div class="def-col-label" role="cell">{{ def }}</div>

                <div class="def-col-toggle" role="cell">
                  @if ($index < 2) {
                    <span class="def-col-text-val">{{ pipelineSPText[$index] }}</span>
                  } @else {
                    <app-toggle-switch
                      [checked]="pipelineSPToggles()[$index]"
                      (checkedChange)="updatePipelineSP($index, $event)" />
                  }
                </div>

                <div class="def-col-toggle" role="cell">
                  @if ($index < 2) {
                    <span class="def-col-text-val">{{ pipelineASOText[$index] }}</span>
                  } @else {
                    <app-toggle-switch
                      [checked]="pipelineASOToggles()[$index]"
                      (checkedChange)="updatePipelineASO($index, $event)" />
                  }
                </div>
              </div>
            }
          </section>

          <!-- ─── SECTION 4: Define Refinance & FASTRefi Tag ─── -->
          <section class="def-section" aria-labelledby="section-refi">
            <div class="def-section-bar" id="section-refi">Define Refinance &amp; FASTRefi Tag</div>

            <!-- Table Header -->
            <div class="def-table-header-refi" role="row">
              <div class="def-col-header first" role="columnheader">Loan Purpose is</div>
              <div class="def-col-header other" role="columnheader">Refinance</div>
              <div class="def-col-header other" role="columnheader">FastRefi</div>
              <div role="columnheader"></div>
            </div>

            <!-- Data Rows -->
            @for (purpose of refiDefinitions; track $index) {
              <div class="def-refi-row" [class.row-alt]="$index % 2 !== 0" role="row">
                <div class="def-col-label" role="cell">{{ purpose }}</div>

                <div class="def-col-toggle" role="cell">
                  <app-toggle-switch
                    [checked]="refiRefinanceToggles()[$index]"
                    (checkedChange)="updateRefiRefinance($index, $event)" />
                </div>

                <div class="def-col-toggle" role="cell">
                  @if (refiFastRefiToggles()[$index] !== null) {
                    <app-toggle-switch
                      [checked]="refiFastRefiToggles()[$index]!"
                      (checkedChange)="updateRefiFastRefi($index, $event)" />
                  }
                </div>

                <div role="cell"></div>
              </div>
            }
          </section>

        </main>
      </div>

      <!-- ═══════════════ FOOTER ═══════════════ -->
      <footer class="def-footer" role="contentinfo">
        &#169; Copyright 2020 Perpetual Limited &nbsp;ABN 86 000 431 327. All Rights Reserved. | Version: 0.0.1
      </footer>

    </div>
  `
})
export class DefinitionsComponent {
  readonly mobileSidebarOpen = signal(false);

  // ─── Section 1: Define Construction Loan Tag ───
  readonly constructionLabels = [
    'Lorem',
    'Lorem ipsum',
    'Lorem ipsum dolor sit amet consectetur. Habitasse non mattis pretium consectetur. Sociis.',
    'Lorem ipsum dolor sit'
  ];
  readonly constructionToggles = signal([true, true, true, false]);

  // ─── Section 2: Fees ───
  readonly feesLabels = [
    'Lorem',
    'Lorem ipsum dolor sit amet consectetur. Neque maecenas tellus feugiat etiam quam malesuada.',
    'Lorem'
  ];
  readonly feesToggles = signal([true, true, false]);

  // ─── Section 3: Define Pipeline Loan ───
  readonly pipelineDefinitions = [
    'Lorem ipsum dolor sit',
    'Aenean nunc amet ultrices',
    'Lorem ipsum dolor sit amet',
    'Facilisis tempor scelerisque ultrices',
    'Proin fermentum a sit pellentesque',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet'
  ];

  readonly pipelineSPText: (string | null)[] = [
    'On or after today', 'Has not settled',
    null, null, null, null, null, null
  ];

  readonly pipelineASOText: (string | null)[] = [
    'On or after today', 'Has not settled',
    null, null, null, null, null, null
  ];

  readonly pipelineSPToggles = signal<boolean[]>([false, false, false, false, false, false, true, true]);
  readonly pipelineASOToggles = signal<boolean[]>([true, true, true, true, true, true, false, false]);

  // ─── Section 4: Define Refinance & FASTRefi Tag ───
  readonly refiDefinitions = [
    'Refinance Construction Loan',
    'Refinance Debt Consolidation',
    'Refinance Equity Take Out',
    'Refinance'
  ];

  readonly refiRefinanceToggles = signal<boolean[]>([true, false, true, true]);
  readonly refiFastRefiToggles = signal<(boolean | null)[]>([null, null, null, false]);

  toggleMobileSidebar(): void {
    this.mobileSidebarOpen.update(v => !v);
  }

  updateConstruction(index: number, value: boolean): void {
    this.constructionToggles.update(arr => arr.map((v, i) => i === index ? value : v));
  }

  updateFees(index: number, value: boolean): void {
    this.feesToggles.update(arr => arr.map((v, i) => i === index ? value : v));
  }

  updatePipelineSP(index: number, value: boolean): void {
    this.pipelineSPToggles.update(arr => arr.map((v, i) => i === index ? value : v));
  }

  updatePipelineASO(index: number, value: boolean): void {
    this.pipelineASOToggles.update(arr => arr.map((v, i) => i === index ? value : v));
  }

  updateRefiRefinance(index: number, value: boolean): void {
    this.refiRefinanceToggles.update(arr => arr.map((v, i) => i === index ? value : v));
  }

  updateRefiFastRefi(index: number, value: boolean): void {
    this.refiFastRefiToggles.update(arr =>
      arr.map((v, i) => i === index ? value : v)
    );
  }
}
