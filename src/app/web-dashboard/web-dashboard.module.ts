import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { WebDashboardComponent } from './web-dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { OnlineSeminarComponent } from './components/online-seminar/online-seminar.component';
import { DocumentsPreviewComponent } from './components/documents-preview/documents-preview.component';
import { InsightsComponent } from './components/insights/insights.component';

const routes = [
  {
    path: '',
    component: WebDashboardComponent
  }
];

@NgModule({
  declarations: [
    WebDashboardComponent,
    OverviewComponent,
    PerformanceComponent,
    OnlineSeminarComponent,
    DocumentsPreviewComponent,
    InsightsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class WebDashboardModule { }
