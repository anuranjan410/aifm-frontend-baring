import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents-preview.component.html',
  styleUrls: ['./documents-preview.component.scss']
})
export class DocumentsPreviewComponent {
  documents = [
    {
      title: 'Drawdown Receipt',
      date: 'Issued on 23 July 2025',
      size: '14 KB',
      bgImage: 'https://api.builder.io/api/v1/image/assets/TEMP/be9ca3232984139ab8074fa047ab507acc3a62fb?width=620',
      type: 'default'
    },
    {
      title: 'Statement of Account',
      date: 'Issued on 23 July 2025',
      size: '14 KB',
      bgImage: 'https://api.builder.io/api/v1/image/assets/TEMP/be9ca3232984139ab8074fa047ab507acc3a62fb?width=620',
      type: 'default'
    },
    {
      title: 'Quarterly Update Report',
      date: 'Issued on 23 July 2025',
      size: '14 KB',
      bgImage: 'https://api.builder.io/api/v1/image/assets/TEMP/3936939ad970f7a9b459a32d0e26039e89d24225?width=620',
      type: 'report'
    },
    {
      title: 'Income Statement',
      date: 'Issued on 23 July 2025',
      size: '14 KB',
      bgImage: 'https://api.builder.io/api/v1/image/assets/TEMP/be9ca3232984139ab8074fa047ab507acc3a62fb?width=620',
      type: 'default'
    }
  ];

  onViewAllDocuments() {
    // Navigate to documents page
    console.log('Navigate to documents page');
  }

  onViewDocument(document: any) {
    console.log('View document:', document.title);
  }

  onDownloadDocument(document: any) {
    console.log('Download document:', document.title);
  }
}
