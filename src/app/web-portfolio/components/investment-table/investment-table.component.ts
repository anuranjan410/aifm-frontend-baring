import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Company {
  name: string;
  industry: string;
  investment: string;
  marketValue: string;
  irr: string;
  moic: string;
  weight: string;
  weightPercent: number;
  logo: string;
}

export interface PortfolioSummary {
  totalHoldings: number;
  totalInvestment: string;
  totalMarketValue: string;
  totalGrossIRR: string;
  totalGrossMOIC: string;
  totalReturns: string;
}

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './investment-table.component.html',
  styleUrls: ['./investment-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvestmentTableComponent {
  portfolioSummary: PortfolioSummary = {
    totalHoldings: 20,
    totalInvestment: '₹985.12 Cr',
    totalMarketValue: '₹1300.07 Cr',
    totalGrossIRR: '20.04%',
    totalGrossMOIC: '1.32X',
    totalReturns: '₹349.94 Cr'
  };

  companies: Company[] = [
    {
      name: 'Lohum Cleantech Pvt Ltd',
      industry: 'Electric Vehicles',
      investment: '₹144.19 Cr',
      marketValue: '₹239.89 Cr',
      irr: '39.25%',
      moic: '1.66',
      weight: '14.6%',
      weightPercent: 14.6,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/381fa02bd05b15f959e26e5beb3aa485c9e2d6bb?width=55'
    },
    {
      name: 'Intagles Lab Pvt Ltd',
      industry: 'Auto',
      investment: '₹117.63 Cr',
      marketValue: '₹239.89 Cr',
      irr: '20.08%',
      moic: '1.33',
      weight: '11.94%',
      weightPercent: 11.94,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/2b9059aa1ed002b184dbe9f2c77627c9b752ed20?width=66'
    },
    {
      name: 'SK Finance Limited',
      industry: 'Financial services',
      investment: '₹95.00 Cr',
      marketValue: '₹95.00 Cr',
      irr: '-',
      moic: '1',
      weight: '9.64%',
      weightPercent: 9.64,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/eb260d59ab2ee9f6c1532eeeeb3f97ba7d00c66a?width=55'
    },
    {
      name: 'Nivara Home Finance Ltd',
      industry: 'NBFC',
      investment: '₹79.77 Cr',
      marketValue: '₹79.77 Cr',
      irr: '-',
      moic: '1',
      weight: '8.10%',
      weightPercent: 8.10,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/d863ce8853e25b1958a065c094fc0d58a7fdae50?width=56'
    },
    {
      name: 'Aditya Auto Products and Engineering India Pvt Ltd',
      industry: 'Electric Vehicles',
      investment: '₹65.00 Cr',
      marketValue: '₹140.35 Cr',
      irr: '34.67%',
      moic: '2.16',
      weight: '6.60%',
      weightPercent: 6.60,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/e483f28efcb7140816e3c5621eb150666614829a?width=74'
    },
    {
      name: 'Koskii- Akya Retail Pvt',
      industry: 'Retail',
      investment: '₹60.06 Cr',
      marketValue: '₹60.06 Cr',
      irr: '-',
      moic: '1',
      weight: '6.10%',
      weightPercent: 6.10,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/06e4b7425bc681cf5318786ab052fd7cc96a81da?width=70'
    },
    {
      name: 'Simipolo Vitrified Pvt Ltd',
      industry: 'Construction materials',
      investment: '₹59.17 Cr',
      marketValue: '₹59.17 Cr',
      irr: '-',
      moic: '1',
      weight: '6.01%',
      weightPercent: 6.01,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/067118b9ae0ce30a1a3affc72fdf9f551b269213?width=73'
    },
    {
      name: 'Radhika Opto Electronics Ltd',
      industry: 'Manufacturing',
      investment: '₹50.00 Cr',
      marketValue: '₹50.00 Cr',
      irr: '-',
      moic: '1',
      weight: '5.08%',
      weightPercent: 5.08,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/7ba7898509d1ed15f9ce08aaae2d9fe42d9511e8?width=83'
    },
    {
      name: 'SatSure Analytics India Pvt Ltd',
      industry: 'Space Technology',
      investment: '₹46.86 Cr',
      marketValue: '₹65.88 Cr',
      irr: '17.31%',
      moic: '1.41',
      weight: '4.76%',
      weightPercent: 4.76,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/0f6075676d12dbf5d2b0ed353b863c35b263cddb?width=58'
    },
    {
      name: 'Yethi Consulting Pvt Ltd',
      industry: 'Enterprise Saas',
      investment: '₹40.00 Cr',
      marketValue: '₹70.00 Cr',
      irr: '27.38%',
      moic: '1.75',
      weight: '4.06%',
      weightPercent: 4.06,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/0ab0b0fd40716986292d245a7abf6ab6b91c2048?width=72'
    },
    {
      name: "Nehat Tech Solutions Pvt Ltd ('Enkash')",
      industry: 'FinTech',
      investment: '₹34.99 Cr',
      marketValue: '-',
      irr: '-',
      moic: '-',
      weight: '3.55%',
      weightPercent: 3.55,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/0e454962d0a10448d12ee641b6ef160a20d13e8c?width=50'
    },
    {
      name: 'Sepio Products Pvt Ltd',
      industry: 'Logistics',
      investment: '₹31.39 Cr',
      marketValue: '₹31.39 Cr',
      irr: '-',
      moic: '1',
      weight: '3.19%',
      weightPercent: 3.19,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b85e74cc37130b6cf754e25654875ada6b81724b?width=67'
    },
    {
      name: 'BluSapphire Cybersystems Pvt Ltd',
      industry: 'Cybersecurity',
      investment: '₹30.00 Cr',
      marketValue: '₹15.00 Cr',
      irr: '-',
      moic: '0.5',
      weight: '3.05%',
      weightPercent: 3.05,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/a56d23a8dc03856f921a5375cee2b6bf7bfa0f6b?width=72'
    },
    {
      name: 'Proklean Technologies',
      industry: 'Chemicals',
      investment: '₹27.49 Cr',
      marketValue: '₹27.49 Cr',
      irr: '-',
      moic: '1',
      weight: '2.79%',
      weightPercent: 2.79,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/3da4f35995058dde6247fa3e99d6e56f8e042e47?width=76'
    },
    {
      name: 'Platinum Industries Limited',
      industry: 'Chemicals',
      investment: '₹25.13 Cr',
      marketValue: '₹62.34 Cr',
      irr: '-',
      moic: '12.48',
      weight: '2.55%',
      weightPercent: 2.55,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/40a0813c5b40b0685569b4097fe27bb4e9eda3d5?width=68'
    },
    {
      name: 'PG Electroplast Limited',
      industry: 'Electronic Equipment, Instruments & Components',
      investment: '₹25.00 Cr',
      marketValue: '₹35.07 Cr',
      irr: '48,096.8%',
      moic: '1.4',
      weight: '2.54%',
      weightPercent: 2.54,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/4c9246df639b643ccfd71ecd1412e05325789491?width=72'
    },
    {
      name: 'eMudhra Limited',
      industry: 'E-verification',
      investment: '₹23.90 Cr',
      marketValue: '₹88.28 Cr',
      irr: '+269.37%',
      moic: '3.69',
      weight: '2.43%',
      weightPercent: 2.43,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/6f60a456c1aa14aff700c1e235d77804d837d2ba?width=72'
    },
    {
      name: 'PropertyPistol Realty Pvt Ltd',
      industry: 'PropTech',
      investment: '₹22.50 Cr',
      marketValue: '₹22.50 Cr',
      irr: '-',
      moic: '1',
      weight: '2.28%',
      weightPercent: 2.28,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/845347306df3c49e4d830eec011220faf35f50cf?width=48'
    },
    {
      name: 'Rainbow Media Pvt Ltd',
      industry: 'Gaming',
      investment: '₹7.04 Cr',
      marketValue: '₹0.95 Cr',
      irr: '-',
      moic: '0.14',
      weight: '0.71%',
      weightPercent: 0.71,
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/439d5b703b64cae54ddb8f86fd7eb77b05f9705c?width=67'
    }
  ];

  /**
   * Get progress percentage for the progress bar
   * @param weightPercent - The weight percentage value
   * @returns The percentage for the progress bar
   */
  private maxWeight: number = Math.max(...this.companies.map(c => c.weightPercent));
  private progressCache = new Map<number, number>();

  getProgressPercent(weightPercent: number): number {
    if (this.progressCache.has(weightPercent)) {
      return this.progressCache.get(weightPercent)!;
    }
    const percent = Math.min((weightPercent / this.maxWeight) * 100, 100);
    this.progressCache.set(weightPercent, percent);
    return percent;
  }

  /**
   * TrackBy function for Angular performance optimization
   * @param index - The index of the item
   * @param company - The company object
   * @returns Unique identifier for the company
   */
  trackByCompany(index: number, company: Company): string {
    return company.name;
  }
}
