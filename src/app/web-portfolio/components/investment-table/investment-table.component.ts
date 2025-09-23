import { Component } from '@angular/core';

@Component({
  selector: 'app-investment-table',
  templateUrl: './investment-table.component.html'
})
export class InvestmentTableComponent {
  companies = [
    { name: 'Lohum Cleantech Pvt Ltd', industry: 'Electric Vehicles', investment: '₹144.19 Cr', value: '₹239.89 Cr', irr: '39.25%', moic: '1.66', weight: '14.6%' },
    { name: 'Intagles Lab Pvt Ltd', industry: 'Auto', investment: '₹117.63 Cr', value: '₹239.89 Cr', irr: '20.08%', moic: '1.33', weight: '11.94%' },
    { name: 'SK Finance Limited', industry: 'Financial services', investment: '₹95.00 Cr', value: '₹95.00 Cr', irr: '-', moic: '1', weight: '9.64%' },
  ];
}
