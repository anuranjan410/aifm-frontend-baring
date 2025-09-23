import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { WebDocumentsComponent } from './web-documents.component';
import { DocumentsGridComponent } from './components/documents-grid/documents-grid.component';

const routes = [
  {
    path: '',
    component: WebDocumentsComponent
  }
];

@NgModule({
  declarations: [
    WebDocumentsComponent,
    DocumentsGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class WebDocumentsModule { }
