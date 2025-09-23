import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents-grid.component.html',
})
export class DocumentsGridComponent {
  documents = [
    { title: 'Drawdown Receipt', date: 'Issued on 23 July 2025' },
    { title: 'Statement of Account', date: 'Issued on 23 July 2025' },
    { title: 'Quarterly Update Report', date: 'Issued on 23 July 2025' },
    { title: 'Income Statement', date: 'Issued on 23 July 2025' },
    { title: 'K1 Certificate', date: 'Issued on 23 July 2025' },
    { title: 'Drawdown Notice', date: 'Issued on 23 July 2025' },
    { title: 'Form 64C', date: 'Issued on 23 July 2025' },
  ];
}
