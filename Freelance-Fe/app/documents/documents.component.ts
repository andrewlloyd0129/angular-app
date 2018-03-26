import { Component } from '@angular/core';
import { Document } from './document';


@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "the description for my first doc",
      file_url: "http://google.com",
      updated_at: "three days ago",
      image_url: "http://google.com"
    },
    {
      title: "My second Doc",
      description: "the description for my first doc",
      file_url: "http://google.com",
      updated_at: "two days ago",
      image_url: "http://google.com"
    },
    {
      title: "My third Doc",
      description: "the description for my first doc",
      file_url: "http://google.com",
      updated_at: "yesterday",
      image_url: "http://google.com"
    },
    {
      title: "My last Doc",
      description: "the description for my first doc",
      file_url: "http://google.com",
      updated_at: "today",
      image_url: "http://google.com"
    }
  ]
}