import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent {
  insights = [
    {
      title: 'Future of Digital Transformation in Enterprise',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/3936939ad970f7a9b459a32d0e26039e89d24225?width=620',
      category: 'Analysis',
      readTime: '5 min read',
      date: 'Oct 15, 2024'
    },
    {
      title: 'Achieving sustainable growth: Make sustainability the focus',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/3936939ad970f7a9b459a32d0e26039e89d24225?width=620',
      category: 'Interview',
      readTime: '8 min read',
      date: 'Oct 12, 2024'
    },
    {
      title: 'An attractive time to get more aggressive: Baring India',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/3936939ad970f7a9b459a32d0e26039e89d24225?width=620',
      category: 'Analysis',
      readTime: '6 min read',
      date: 'Oct 8, 2024'
    }
  ];

  onViewAllInsights() {
    console.log('Navigate to insights page');
  }

  onReadInsight(insight: any) {
    console.log('Read insight:', insight.title);
  }
}
