import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-table.component.html',
  styleUrls: ['./investment-table.component.scss'],
})
export class InvestmentTableComponent {
  getProgressWidth(weightPercent: number): string {
    return `${Math.min(weightPercent, 86)}px`;
  }
  portfolioSummary = {
    totalHoldings: 20,
    totalInvestment: '₹985.12 Cr',
    totalMarketValue: '₹1300.07 Cr',
    totalGrossIRR: '20.04%',
    totalGrossMOIC: '1.32X',
    totalReturns: '₹349.94 Cr'
  };

  companies = [
    {
      name: 'Lohum Cleantech Pvt Ltd',
      industry: 'Electric Vehicles',
      investment: '₹144.19 Cr',
      marketValue: '₹239.89 Cr',
      irr: '39.25%',
      moic: '1.66',
      weight: '14.6%',
      weightPercent: 20.0667,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/e0397a1d710405e163fa36d41abfc46759183507?width=55'
    },
    {
      name: 'Intagles Lab Pvt Ltd',
      industry: 'Auto',
      investment: '₹117.63 Cr',
      marketValue: '₹239.89 Cr',
      irr: '20.08%',
      moic: '1.33',
      weight: '11.94%',
      weightPercent: 17.2,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/83e4b1a7abf93ffe1e65320f963d3e23b325ff33?width=66'
    },
    {
      name: 'SK Finance Limited',
      industry: 'Financial services',
      investment: '₹95.00 Cr',
      marketValue: '₹95.00 Cr',
      irr: '-',
      moic: '1',
      weight: '9.64%',
      weightPercent: 15.2889,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/d2e64e813c784082797434a29255f3c16159be6f?width=55'
    },
    {
      name: 'Nivara Home Finance Ltd',
      industry: 'NBFC',
      investment: '₹79.77 Cr',
      marketValue: '₹79.77 Cr',
      irr: '-',
      moic: '1',
      weight: '8.10%',
      weightPercent: 13,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/a3bfe79bcc6bf4d017e44525aa137b717eaaf8cc?width=56'
    },
    {
      name: 'Aditya Auto Products and Engineering India Pvt Ltd',
      industry: 'Electric Vehicles',
      investment: '₹65.00 Cr',
      marketValue: '₹140.35 Cr',
      irr: '34.67%',
      moic: '2.16',
      weight: '6.60%',
      weightPercent: 11,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/74dd2ac5d33dcddc46f48bf1cc29bf53f0aeebde?width=74'
    },
    {
      name: 'Koskii- Akya Retail Pvt',
      industry: 'Retail',
      investment: '₹60.06 Cr',
      marketValue: '₹60.06 Cr',
      irr: '-',
      moic: '1',
      weight: '6.10%',
      weightPercent: 11,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3af8efac4c84b7a41daf38d26cfe03a91a870405?width=70'
    },
    {
      name: 'Simipolo Vitrified Pvt Ltd',
      industry: 'Construction materials',
      investment: '₹59.17 Cr',
      marketValue: '₹59.17 Cr',
      irr: '-',
      moic: '1',
      weight: '6.01%',
      weightPercent: 11.5,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/714dfd248901c50fc386a1ec3302bcd5444ee553?width=73'
    },
    {
      name: 'Radhika Opto Electronics Ltd',
      industry: 'Manufacturing',
      investment: '₹50.00 Cr',
      marketValue: '₹50.00 Cr',
      irr: '-',
      moic: '1',
      weight: '5.08%',
      weightPercent: 10,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b9ed2ffbe72da60abfd27b17a3b13bbbf11ae624?width=83'
    },
    {
      name: 'SatSure Analytics India Pvt Ltd',
      industry: 'Space Technology',
      investment: '₹46.86 Cr',
      marketValue: '₹65.88 Cr',
      irr: '17.31%',
      moic: '1.41',
      weight: '4.76%',
      weightPercent: 10,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/98cf9b0d7a12757b907596379ef017186a12aade?width=58'
    },
    {
      name: 'Yethi Consulting Pvt Ltd',
      industry: 'Enterprise Saas',
      investment: '₹40.00 Cr',
      marketValue: '₹70.00 Cr',
      irr: '27.38%',
      moic: '1.75',
      weight: '4.06%',
      weightPercent: 9,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/0aaf7b52756b85948344907a95e8b7d1970918a0?width=72'
    }
  ];
}
