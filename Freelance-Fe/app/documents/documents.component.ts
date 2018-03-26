import { Component } from '@angular/core';
import { Document } from './document';


@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "the description for my first doc",
      file_url: "http://google.com",
      updated_at: "today",
      image_url: "http://google.com"
    },
    {
      title: "My second Doc",
      description: "the description for my first doc",
      file_url: "http://google.com",
      updated_at: "today",
      image_url: "http://google.com"
    },
    {
      title: "My third Doc",
      description: "the description for my first doc",
      file_url: "http://google.com",
      updated_at: "today",
      image_url: "http://google.com"
    }
  ]
}