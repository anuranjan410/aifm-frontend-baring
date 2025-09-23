import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FundSelectorComponent } from './components/fund-selector/fund-selector.component';
import { DistributionChartComponent } from './components/distribution-chart/distribution-chart.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NewsletterComponent,
    FundSelectorComponent,
    DistributionChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NewsletterComponent,
    FundSelectorComponent,
    DistributionChartComponent
  ]
})
export class SharedModule { }
