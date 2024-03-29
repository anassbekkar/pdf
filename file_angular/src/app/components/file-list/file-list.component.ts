import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  uploadedFiles: string[] = ['example-file1.pdf', 'example-file2.jpg', 'example-file3.docx']; // Exemple de liste de fichiers téléversés

  constructor() { }

  ngOnInit(): void {
  }

}

