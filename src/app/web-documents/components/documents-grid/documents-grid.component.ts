import { Component } from '@angular/core';

@Component({
  selector: 'app-documents-grid',
  templateUrl: './documents-grid.component.html',
  styleUrls: ['./documents-grid.component.scss']
})
export class DocumentsGridComponent {
  documents = [
    { title: 'Drawdown Receipt', date: 'Issued on 23 July 2025' },
    { title: 'Statement of Account', date: 'Issued on 23 July 2025' },
    { title: 'Quarterly Update Report', date: 'Issued on 23 July 2025' },
    { title: 'Income Statement', date: 'Issued on 23 July 2025' },
    { title: 'K1 Certificate', date: 'Issued on 23 July 2025' },
    { title: 'Drawdown Notice', date: 'Issued on 23 July 2025' },
    { title: 'Form 64C', date: 'Issued on 23 July 2025' }
  ];
}
